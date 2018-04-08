import * as unchanged from 'unchanged';
import {handleActions} from 'redux-actions';

import * as arrayUtils from 'src/utils/array';
import {ACTION_TYPES} from 'src/stores/applicationNotifications/applicationNotificationsActions';

export const INITIAL_STATE = {
  notifications: [],
};

export const addHandler = (state, {payload: notification}) => {
  return unchanged.add('notifications', notification, state);
};

export const updateHandler = (state, {payload: {id, notification}}) => {
  const index = arrayUtils.getIndexByPropertyValue(state.notifications, 'id', id);

  if (!~index) {
    return state;
  }

  return unchanged.set(`notifications[${index}]`, notification, state);
};

export const removeHandler = (state, {payload: id}) => {
  const index = arrayUtils.getIndexByPropertyValue(state.notifications, 'id', id);

  if (!~index) {
    return state;
  }

  return unchanged.remove(`notifications[${index}]`, state);
};

export const resetHandler = () => {
  return INITIAL_STATE;
};

export const applicationNotificationsReducer = handleActions(
  {
    [ACTION_TYPES.ADD]: addHandler,
    [ACTION_TYPES.UPDATE]: updateHandler,
    [ACTION_TYPES.REMOVE]: removeHandler,
    [ACTION_TYPES.RESET]: resetHandler,
  },
  INITIAL_STATE
);

export default applicationNotificationsReducer;
