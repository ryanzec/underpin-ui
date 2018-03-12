import * as themesCss from 'src/styles/themes';

const theme = themesCss.light;

export const variables = {
  inputBorderRadius: '5px',
  paddingInput: '4px',
  paddingLabel: '4px',
  paddingFormElement: '12px',
  paddingFormLegend: '4px',
  marginFormLegend: '8px',
  paddingValidationIcon: '4px',
  fontSizeFormLegend: '1.8rem',
  borderColorFocusInput: theme.global.blue2,
  backgroundColorTextboxGroupAddon: theme.global.gray2,
  sizeRequiredIconInput: '6px',
  sizeValidationIconInput: '12px',
  heightTextbox: '26px',
  colorCheckableIcon: theme.global.blue2,
  colorDisabledCheckableIcon: theme.global.gray4,
  marginCheckableIcon: '4px',
};

export const checkableLabelStyles = () => {
  return `
    display: flex;
    align-items: center;
    padding: (${variables.paddingInput} / 2) 0;
    font-weight: 400;
  `;
};
export const validationStyles = (lightColor, darkColor) => {
  return `
    color: ${darkColor};
    border-color: ${darkColor};
    background-color: ${lightColor};
  `;
};

export const standardInputStyles = () => {
  return `
    width: 100%;
    border-radius: ${variables.inputBorderRadius};
    outline: none;
    border: 1px solid ${theme.application.borderColor};
    padding: ${variables.paddingInput} calc(${variables.paddingInput} * 2);

    &:focus {
      border-color: ${variables.borderColorFocusInput};
    }
  `;
};

export const elementRequiredIconStyles = () => {
  return `
    height: ${variables.sizeRequiredIconInput};
    width: ${variables.sizeRequiredIconInput};
    fill: ${theme.state.danger};
    position: relative;
    left: 3px;
    top: -5px;
  `;
};

export const checkboxToggleBarSizerStyles = (height = '24px', width = '50px', spacing = '4px') => {
  return `
    height: ${height};
    width: ${width};
    line-height: ${height};
    padding: 0 calc(${spacing} + 5px) 0 calc(${spacing} + 5px);
  `;
};

export const checkboxToggleCircleSizerStyles = (isChecked, height = '24px', width = '50px', spacing = '4px') => {
  const radius = `calc(${height} - (${spacing} * 2))`;
  const translateX = isChecked ? `calc(${width} - calc(${radius} + ${spacing}))` : spacing;

  return `
    height: ${radius};
    width: ${radius};
    transform: translateX(${translateX}) translateY(${spacing});
  `;
};
