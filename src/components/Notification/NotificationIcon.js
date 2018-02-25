import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import capitalize from 'lodash/capitalize';

import * as themesCss from 'src/styles/themes';
import * as notificationCss from 'src/components/Notification/internal/notificationCss';

import SvgIcon, {SvgIconInnerStyled} from 'src/components/SvgIcon/SvgIcon';

export const styleTypeStyles = (props) => {
  if (!props.styleType) {
    return '';
  }

  const color = props.isFilled
    ? themesCss.light.global.white
    : notificationCss.variables[`color${capitalize(props.styleType)}Dark`];

  return `
    color: ${color}
  `;
};

export const baseContainerStyles = (props) => {
  return css`
    margin-right: ${notificationCss.variables.padding};

    ${SvgIconInnerStyled} {
      ${styleTypeStyles(props)};
    }

    /* veritcally center the icon */
    display: flex;
    align-items: center;
  `;
};

export const NotificationIcon = styled(SvgIcon)`
  ${baseContainerStyles};
`;

NotificationIcon.propsTypes = {
  isFilled: PropTypes.bool,
  styleType: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
};

NotificationIcon.defaultProps = {
  isFilled: false,
};

export default NotificationIcon;
