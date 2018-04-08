import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';
import * as cssUtils from 'src/utils/css';
import * as formCss from 'src/components/Form/internal/formCss';

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

export const FormTextboxGroupAddon = styled.div`
  display: inline-flex;
  border: 1px solid ${themesCss.light.application.borderColor};
  padding: ${formCss.variables.paddingInput};
  background-color: ${formCss.variables.backgroundColorTextboxGroupAddon};

  &:first-child {
    ${cssUtils.borderRadius('left', formCss.variables.inputBorderRadius)} border-right: none;
  }

  &:last-child {
    ${cssUtils.borderRadius('right', formCss.variables.inputBorderRadius)} border-left: none;
  }

  ${validationStyles};
`;

FormTextboxGroupAddon.propsTypes = {
  validation: PropTypes.oneOf(['valid,', 'invalid']),
};

FormTextboxGroupAddon.defaultProps = {
  validation: null,
};

export default FormTextboxGroupAddon;
