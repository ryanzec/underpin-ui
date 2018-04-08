import PropTypes from 'prop-types';
import {createElement} from 'react';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';
import * as cssUtils from 'src/utils/css';
import * as formCss from 'src/components/Form/internal/formCss';

export const typeStyles = (props) => {
  if (props.type === 'file') {
    return `
      border: 0;
      padding: ${formCss.variables.paddingInput} 0;
    `;
  }

  if (props.type === 'text') {
    return `
      height: ${formCss.variables.heightTextbox};
      background-color: ${themesCss.light.global.white};
    `;
  }

  return ``;
};

export const addonStyles = (props) => {
  if (props.type === 'texarea' || !props.hasAddon) {
    return '';
  }

  return `
    border-radius: 0;

    &:first-child {
      ${cssUtils.borderRadius('left', formCss.variables.inputBorderRadius)}
    }

    &:last-child {
      ${cssUtils.borderRadius('right', formCss.variables.inputBorderRadius)}
    }
  `;
};

export const validationStyles = (props) => {
  if (!props.validation) {
    return '';
  }

  const lightColor
    = props.validation === 'valid' ? themesCss.light.state.successLight : themesCss.light.state.dangerLight;
  const darkColor = props.validation === 'valid' ? themesCss.light.state.successDark : themesCss.light.state.dangerDark;

  return `
    color: ${darkColor};
    border-color: ${darkColor};
    background-color: ${lightColor};
  `;
};

export const FormTextbox = styled(({children, validation, hasAddon, type, ...props}) => {
  if (type !== 'textarea') {
    props.type = type;
  }

  return createElement(type === 'textarea' ? 'textarea' : 'input', props, children);
})`
  ${formCss.standardInputStyles()}
  ${typeStyles}
  ${validationStyles}
  ${addonStyles}
`;

FormTextbox.propsTypes = {
  validation: PropTypes.oneOf(['valid', 'invalid']),
  hasAddon: PropTypes.bool,
  type: PropTypes.string,
};

FormTextbox.defaultProps = {
  validation: null,
  hasAddon: false,
  type: 'text',
};

export default FormTextbox;
