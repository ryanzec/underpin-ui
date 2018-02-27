import * as PropTypes from 'prop-types';
import * as React from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import * as applicationNotificationsActions from 'src/stores/applicationNotifications/applicationNotificationsActions';

import Button from 'src/components/Button/Button';
import Notification from 'src/components/Notification/Notification';
import NotificationIcon from 'src/components/Notification/NotificationIcon';
import NotificationMessage from 'src/components/Notification/NotificationMessage';
import NotificationActions from 'src/components/Notification/NotificationActions';
import NotificationContainer from 'src/components/Notification/NotificationContainer';
import NotificationCountdown from 'src/components/Notification/NotificationCountdown';
import ManagedNotification from 'src/components/Notification/ManagedNotification';

export const mapStateToProps = ({applicationNotifications}) => {
  return {
    applicationNotifications: applicationNotifications.notifications,
  };
};

export const mapDispatchToProps = dispatch => ({
  dispatch,

  onClickAddAutoClose() {
    setTimeout(() => {
      for (let x = 1; x < 2; x += 1) {
        dispatch(
          applicationNotificationsActions.add({
            id: uuid(),
            message: 'test',
            autoClose: 3000,
            icon: 'Alarm',
            styleType: 'danger',
          })
        );
      }
    }, 0);
  },

  onClickAdd() {
    dispatch(
      applicationNotificationsActions.add({
        id: 1,
        message: 'test',
        styleType: 'warning',
      })
    );
  },

  onClickUpdate() {
    dispatch(
      applicationNotificationsActions.update(1, {
        message: 'updated',
        styleType: 'success',
      })
    );
  },

  onClickClear() {
    dispatch(applicationNotificationsActions.reset());
  },
});

class ApplicationNotificationsPage extends React.Component {
  static propTypes = {
    applicationNotifications: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  removeNotification = (id) => {
    this.props.dispatch(applicationNotificationsActions.remove(id));
  };

  renderApplictionNotifications() {
    let applicationNotifications = [];

    if (this.props.applicationNotifications.length > 0) {
      this.props.applicationNotifications.forEach((notification) => {
        applicationNotifications.push(
          <CSSTransition
            classNames="fade-out"
            key={notification.id}
            timeout={500}
          >
            <ManagedNotification
              notification={notification}
              removeAction={this.removeNotification}
            />
          </CSSTransition>
        );
      });
    }

    return applicationNotifications;
  }

  render() {
    return (
      <div className="p-sub-systems-application-notifications">
        <NotificationContainer>
          <TransitionGroup>{this.renderApplictionNotifications()}</TransitionGroup>
        </NotificationContainer>
        <Button
          onClick={this.props.onClickAdd}
          styleType="success"
        >
          Add
        </Button>
        <Button
          onClick={this.props.onClickAddAutoClose}
          styleType="success"
        >
          Add Auto Close
        </Button>
        <Button onClick={this.props.onClickUpdate}>Update</Button>
        <Button
          onClick={this.props.onClickClear}
          styleType="danger"
        >
          Clear
        </Button>
      </div>
    );
  }
}

ApplicationNotificationsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationNotificationsPage);
