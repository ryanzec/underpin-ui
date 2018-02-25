import React from 'react';
import {Route} from 'react-router';

import ApplicationNotificationsPage from './ApplicationNotificationsPage';

export const routes = [
  <Route
    component={ApplicationNotificationsPage}
    key="1"
    name="sub-systems-application-notifications"
    path="/sub-systems/application-notifications"
  />,
];
