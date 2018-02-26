import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';

import ApplicationNotificationsPage from './ApplicationNotificationsPage';

export class SubSystemRouter extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  render() {
    const {match} = this.props;

    return (
      <div>
        <Route
          component={ApplicationNotificationsPage}
          path={`${match.url}/application-notifications`}
        />
      </div>
    );
  }
}

export default SubSystemRouter;
