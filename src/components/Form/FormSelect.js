import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';
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

export const FormSelect = styled.select`
  height: ${formCss.variables.heightTextbox};
  background-color: ${themesCss.light.global.white};

  ${formCss.standardInputStyles()} ${validationStyles};
`;

FormSelect.propsTypes = {
  validation: PropTypes.oneOf(['valid', 'invalid']),
};

FormSelect.defaultProps = {
  validation: null,
};

export default FormSelect;
