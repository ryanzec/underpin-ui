import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import history from 'app/history';
import store from 'app/store';

import Application from 'app/react/components/Application';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Application />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('.react-bootstrap-element')
);
