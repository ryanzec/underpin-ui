import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import history from 'app/history';
import menu from './stores/menu/menuReducer';
import application from './stores/application/applicationReducer';
import applicationNotifications from 'src/stores/applicationNotifications/applicationNotificationsReducer';
import dynamicallyLoadingComponents from './stores/dynamicallyLoadingComponents/dynamicallyLoadingComponents.reducer';

const reduxMiddleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
  const reduxFreeze = require('redux-freeze');

  reduxMiddleware.push(reduxFreeze);
}

const reducers = combineReducers({
  menu,
  application,
  applicationNotifications,
  dynamicallyLoadingComponents,
  router: routerReducer,
});
const middleware = applyMiddleware(...reduxMiddleware);

export default createStore(reducers, middleware);
