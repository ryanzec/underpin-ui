import styled from 'styled-components';

import * as notificationCss from 'src/components/Notification/internal/notificationCss';

export const NotificationMessage = styled.div`
  flex: 1;
  line-height: ${notificationCss.variables.lineHeight};
`;

export default NotificationMessage;
