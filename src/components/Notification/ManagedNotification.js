import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import Notification from './Notification';
import NotificationIcon from './NotificationIcon';
import NotificationMessage from './NotificationMessage';
import NotificationActions from './NotificationActions';
import NotificationCountdown from './NotificationCountdown';

export const createComponentWillMount = (instance) => {
  return () => {
    if (instance.props.notification.autoClose) {
      instance.setState({
        closeTimeoutId: setTimeout(() => {
          instance.props.removeAction(instance.props.notification.id);
        }, instance.props.notification.autoClose),
      });
    }
  };
};

export const createOnMouseEnterNotification = (instance) => {
  return () => {
    if (instance.state.closeTimeoutId) {
      clearTimeout(instance.state.closeTimeoutId);

      instance.setState({
        closeTimeoutId: null,
      });
    }
  };
};

export const createOnMouseLeaveNotification = (instance) => {
  return () => {
    if (instance.props.notification.autoClose) {
      instance.start = new Date().getTime();

      instance.setState({
        closeTimeoutId: setTimeout(() => {
          instance.props.removeAction(instance.props.notification.id);
        }, instance.props.notification.autoClose),
      });
    }
  };
};

export const createOnClickNegative = (instance) => {
  return () => {
    instance.props.removeAction(instance.props.notification.id);
  };
};

export const createOnClickPositive = (instance) => {
  return () => {
    instance.props.removeAction(instance.props.notification.id);
  };
};

class ManagedNotification extends PureComponent {
  static propTypes = {
    notification: PropTypes.object.isRequired,
    removeAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    notification: {},
    removeAction: null,
  };

  state = {
    closeTimeoutId: null,
  };

  componentWillMount = createComponentWillMount(this);
  onMouseEnterNotification = createOnMouseEnterNotification(this);
  onMouseLeaveNotification = createOnMouseLeaveNotification(this);
  onClickNegative = createOnClickNegative(this);
  onClickPositive = createOnClickPositive(this);

  render() {
    const countdownNode
      = this.props.notification.autoClose && this.state.closeTimeoutId ? (
        <NotificationCountdown length={this.props.notification.autoClose} />
      ) : null;

    return (
      <Notification
        hasShadow
        isFilled
        onMouseEnter={this.onMouseEnterNotification}
        onMouseLeave={this.onMouseLeaveNotification}
        styleType={this.props.notification.styleType || 'success'}
      >
        <NotificationIcon icon={this.props.notification.icon || 'Check'} />
        <NotificationMessage>{this.props.notification.message}</NotificationMessage>
        <NotificationActions
          actions="both"
          onClickNegative={this.onClickNegative}
          onClickPositive={this.onClickPositive}
          type="icons"
        />
        {countdownNode}
      </Notification>
    );
  }
}

export default ManagedNotification;
