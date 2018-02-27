import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {capitalize} from 'lodash';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as buttonCss from 'src/components/Button/internal/buttonCss';
import * as cssUtils from 'src/utils/css';

export const generateBaseStyles = (props) => {
  return css`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${buttonCss.variables.padding};
    border-radius: ${buttonCss.variables.borderRadius};
    outline: none;
    border: none;
    background-color: ${buttonCss.variables.backgroundColor};
    color: ${buttonCss.variables.color};
    font-size: ${buttonCss.variables.fontSize};
    text-align: center;
    ${props.isPill ? `border-radius: ${structureCss.borderRadius.pill};` : ''};
  `;
};

export const hoverStyles = (props) => {
  if (props.styleType === 'link') {
    return '';
  }

  const backgroundHoverColor
    = !props.styleType || props.styleType === 'link'
      ? buttonCss.variables.backgroundColorHover
      : buttonCss.variables[`backgroundColor${capitalize(props.styleType)}Hover`];

  return css`
    &:hover {
      background-color: ${backgroundHoverColor};
      border-color: ${backgroundHoverColor};
      color: ${buttonCss.variables.colorLight};
    }
  `;
};

export const fillStyles = (props) => {
  if (props.styleType === 'link') {
    return '';
  }

  const backgroundColor = props.styleType
    ? buttonCss.variables[`backgroundColor${capitalize(props.styleType)}`]
    : buttonCss.variables.backgroundColor;

  return css`
    ${props.styleType !== 'link' ? `border: 2px solid ${backgroundColor};` : ''} ${cssUtils.fillColors(
  buttonCss.variables.colorLight,
  backgroundColor
)};
  `;
};

export const thinStyles = (props) => {
  if (!props.isThin) {
    return '';
  }

  let backgroundColor = buttonCss.variables.backgroundColor;

  if (props.styleType !== 'link' && props.styleType) {
    backgroundColor = buttonCss.variables[`backgroundColor${capitalize(props.styleType)}`];
  }

  return css`
    ${cssUtils.thinColors(backgroundColor)};
  `;
};

export const linkStyles = (props) => {
  if (props.styleType !== 'link') {
    return '';
  }

  return css`
    background-color: ${themesCss.light.global.transparent};
    color: ${themesCss.light.application.textLinkColor};
    padding: 0;

    &:hover {
      text-decoration: underline;
    }
  `;
};

/**
 * A Button...
 */
export const Button = styled.button`
  ${generateBaseStyles}
  ${hoverStyles}
  ${fillStyles}
  ${thinStyles}
  ${linkStyles}
`;

Button.propsTypes = {
  styleType: PropTypes.oneOf(['safe', 'info', 'warning', 'danger']),
  isPill: PropTypes.bool,
  isThin: PropTypes.bool,
};

Button.defaultProps = {
  styleType: null,
  isPill: false,
  isThin: false,
};

export default Button;
