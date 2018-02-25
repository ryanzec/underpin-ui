import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';
import * as datePickerCss from 'src/components/DatePicker/internal/datePickerCss';

export const applyHoverStyles = (props) => {
  if (props.disabled || props.isActive) {
    return '';
  }

  return `
    &:hover {
      background-color: ${themesCss.light.global.gray2};
      font-weight: 500;
    }
  `;
};

export const applyConditionalStyles = (props) => {
  let opacity = 1;
  let cursor = 'pointer';
  let activeStyle = '';

  if (props.isActive) {
    activeStyle = `
      background-color: ${themesCss.light.state.active};
      color: ${themesCss.light.application.textLightColor};
      font-weight: 500;
    `;
  }

  if (props.isOtherMonth) {
    opacity = 0.6;
  }

  if (props.disabled) {
    opacity = 0.3;
    cursor = 'not-allowed';
  }

  return `
    opacity: ${opacity};
    cursor: ${cursor};
    ${activeStyle}
  `;
};

export const DatePickerDay = styled.div`
  border-radius: 3px;

  ${datePickerCss.applyDaysBaseStyles}
  ${applyConditionalStyles}
  ${applyHoverStyles}
`;

DatePickerDay.propsTypes = {
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  isOtherMonth: PropTypes.bool,
};

DatePickerDay.defaultProps = {
  isActive: false,
  disabled: false,
  isOtherMonth: false,
};

export default DatePickerDay;
