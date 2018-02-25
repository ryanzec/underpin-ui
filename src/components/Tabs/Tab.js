import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as cssUtils from 'src/utils/css';

const hoverStyles = () => {
  return `
    color: ${themesCss.light.application.textLightColor};
    background-color: ${themesCss.light.state.active};
    border-color: ${themesCss.light.state.active};
    cursor: pointer;
  `;
};

const activeStyles = (props) => {
  if (!props.isActive) {
    return '';
  }

  return hoverStyles();
};

const blockStyles = (props) => {
  if (!props.isBlock) {
    return '';
  }

  return `
    border: none;
    margin: 0;
    border-radius: 0;
  `;
};

export const Tab = styled.div`
  ${cssUtils.borderRadius('top', structureCss.borderRadius.tiny)} padding: ${structureCss.spacing.extraSmall};
  margin: 0 ${structureCss.spacing.tiny};
  background-color: ${themesCss.light.global.gray2};
  border: 1px solid ${themesCss.light.application.border};
  border-bottom: none;

  &:hover {
    ${hoverStyles};
  }

  ${activeStyles} ${blockStyles};
`;

Tab.propsTypes = {
  isActive: PropTypes.bool,
  isBlock: PropTypes.bool,
};

Tab.defaultProps = {
  isActive: false,
  isBlock: false,
};

export default Tab;
