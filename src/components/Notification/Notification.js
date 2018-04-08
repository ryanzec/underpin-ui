import PropTypes from 'prop-types';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import * as polished from 'polished';

import * as themesCss from 'src/styles/themes';
import * as notificationCss from 'src/components/Notification/internal/notificationCss';

export const colorStyles = (darkColor, isFilled = false) => {
  return `
    border: 2px solid ${darkColor};
    background-color: ${isFilled ? darkColor : notificationCss.variables.backgroundColor};
    overflow: hidden;
    position: relative;

    ${isFilled ? `color: ${themesCss.light.global.white};` : ''}
  `;
};

export const styleTypeStyles = (props) => {
  let color = notificationCss.variables[`color${capitalize(props.styleType)}Dark`];

  if (props.isFilled) {
    color = polished.lighten(0.2, color);
  }

  return `
    border: 2px solid ${color};
    background-color: ${props.isFilled ? color : notificationCss.variables.backgroundColor};
    overflow: hidden;
    position: relative;

    ${props.isFilled ? `color: ${themesCss.light.global.white};` : ''}
  `;
};

export const Notification = styled.div`
  display: flex;
  padding: ${notificationCss.variables.padding};
  border-radius: ${notificationCss.variables.borderRadius};

  ${props => (props.hasShadow ? `box-shadow: ${notificationCss.variables.boxShadow};` : '')} ${styleTypeStyles};
`;

Notification.propsTypes = {
  styleType: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  isFilled: PropTypes.bool,
  hasShadow: PropTypes.bool,
};

Notification.defaultProps = {
  styleType: null,
  isFilled: false,
  hasShadow: false,
};

export default Notification;
