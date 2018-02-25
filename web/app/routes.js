import React from 'react';
// import createHistory from 'history/createBrowserHistory';
import {
  // useRouterHistory,
  IndexRoute,
  Route,
  Router,
  browserHistory,
} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import store from 'app/store';
import Application from 'app/react/components/Application';
import NotFoundPage from 'app/react/components/NotFoundPage';
import CodePage from 'app/pages/styleGuide/CodePage';
import {routes as styleGuideRoutes} from 'app/pages/styleGuide/module';
import {routes as subSystemsRoutes} from 'app/pages/subSystems/module';
import {routes as showcaseRoutes} from 'app/pages/showcase/module';

// const browserHistory = useRouterHistory(createHistory)({
//   basename: '/'
// });

let history = syncHistoryWithStore(browserHistory, store);

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route
        component={Application}
        path="/"
      >
        <IndexRoute component={CodePage} />
        {styleGuideRoutes}
        {subSystemsRoutes}
        {showcaseRoutes}
        <Route
          component={NotFoundPage}
          path="*"
        />
      </Route>
    </Router>
  </Provider>
);
