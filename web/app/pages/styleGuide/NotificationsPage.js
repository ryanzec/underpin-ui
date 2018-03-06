import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import Button from 'src/components/Button/Button';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';
import Notification from 'src/components/Notification/Notification';
import NotificationIcon from 'src/components/Notification/NotificationIcon';
import NotificationMessage from 'src/components/Notification/NotificationMessage';
import NotificationActions from 'src/components/Notification/NotificationActions';
import NotificationContainer from 'src/components/Notification/NotificationContainer';

class NotificationsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateOnClickNegative(id) {
    return () => {
      this.props.dispatch(applicationNotificationsActions.remove(id));
    };
  }

  generateOnClickPositive(id) {
    return () => {
      this.props.dispatch(applicationNotificationsActions.remove(id));
    };
  }

  renderApplictionNotifications() {
    let applicationNotifications = [];

    if (this.props.applicationNotifications.notifications.length > 0) {
      this.props.applicationNotifications.notifications.forEach((notification) => {
        applicationNotifications.push(
          <Notification
            className="u-margin-bottom-12"
            hasShadow
            styleType="success"
          >
            <NotificationIcon icon="Check" />
            <NotificationMessage>{notification.message}</NotificationMessage>
            <NotificationActions
              actions="both"
              onClickNegative={this.generateOnClickNegative(notification.id)}
              onClickPositive={this.generateOnClickPositive(notification.id)}
              type="icons"
            />
          </Notification>
        );
      });
    }

    return applicationNotifications;
  }

  render() {
    return (
      <div className="p-style-guide-notifications">
        <h1>Notifications</h1>
        <h2>Basic</h2>
        <Notification
          className="u-margin-bottom-12"
          styleType="success"
        >
          <NotificationIcon
            icon="Check"
            styleType="success"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="both"
            styleType="success"
            type="icons"
          />
        </Notification>
        <Notification
          className="u-margin-bottom-12"
          styleType="info"
        >
          <NotificationIcon
            icon="Info"
            styleType="info"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="both"
            styleType="info"
            type="text"
          />
        </Notification>
        <Notification
          className="u-margin-bottom-12"
          styleType="warning"
        >
          <NotificationIcon
            icon="Alarm"
            styleType="warning"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="negative"
            styleType="warning"
            type="text"
          />
        </Notification>
        <Notification
          className="u-margin-bottom-12"
          styleType="danger"
        >
          <NotificationIcon
            icon="Clear"
            styleType="danger"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="positive"
            styleType="danger"
            type="icons"
          />
        </Notification>
        <h2>Filled</h2>
        <Notification
          className="u-margin-bottom-12"
          isFilled
          styleType="success"
        >
          <NotificationIcon
            icon="Check"
            isFilled
            styleType="success"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="both"
            isFilled
            styleType="success"
            type="icons"
          />
        </Notification>
        <Notification
          className="u-margin-bottom-12"
          isFilled
          styleType="info"
        >
          <NotificationIcon
            icon="Info"
            isFilled
            styleType="info"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="both"
            isFilled
            styleType="info"
            type="text"
          />
        </Notification>
        <Notification
          className="u-margin-bottom-12"
          isFilled
          styleType="warning"
        >
          <NotificationIcon
            icon="Alarm"
            isFilled
            styleType="warning"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="negative"
            isFilled
            styleType="warning"
            type="text"
          />
        </Notification>
        <Notification
          className="u-margin-bottom-12"
          isFilled
          styleType="danger"
        >
          <NotificationIcon
            icon="Clear"
            isFilled
            styleType="danger"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="positive"
            isFilled
            styleType="danger"
            type="icons"
          />
        </Notification>
        <h2>Shadows</h2>
        <Notification
          className="u-margin-bottom-12"
          hasShadow
          styleType="success"
        >
          <NotificationIcon
            icon="Check"
            styleType="success"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="both"
            type="icons"
          />
        </Notification>
        <Notification
          className="u-margin-bottom-12"
          hasShadow
          isFilled
          styleType="info"
        >
          <NotificationIcon
            icon="Info"
            isFilled
            styleType="info"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="both"
            isFilled
            type="text"
          />
        </Notification>
        <Notification
          className="u-margin-bottom-12"
          hasShadow
          styleType="warning"
        >
          <NotificationIcon
            icon="Alarm"
            styleType="warning"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="negative"
            type="text"
          />
        </Notification>
        <Notification
          className="u-margin-bottom-12"
          hasShadow
          isFilled
          styleType="danger"
        >
          <NotificationIcon
            icon="Clear"
            isFilled
            styleType="danger"
          />
          <NotificationMessage>This is a BeeYouTeeful notification</NotificationMessage>
          <NotificationActions
            actions="positive"
            isFilled
            type="icons"
          />
        </Notification>
      </div>
    );
  }
}

NotificationsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default NotificationsPage;
