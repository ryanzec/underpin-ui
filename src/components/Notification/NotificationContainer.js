import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as notificationCss from 'src/components/Notification/internal/notificationCss';

export const positionStyles = (props) => {
  const xPosition = ~props.position.indexOf('Left') ? 'left' : 'right';
  const yPosition = ~props.position.indexOf('top') ? 'top' : 'bottom';

  return `
    ${xPosition}: ${notificationCss.variables.offsetPositionContainer};
    ${yPosition}: ${notificationCss.variables.offsetPositionContainer};
  `;
};

export const NotificationContainer = styled.div`
  position: fixed;
  z-index: 10002;

  ${positionStyles};
`;

NotificationContainer.propsTypes = {
  position: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
};

NotificationContainer.defaultProps = {
  position: 'bottomLeft',
};

export default NotificationContainer;
