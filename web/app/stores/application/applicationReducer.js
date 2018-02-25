import * as unchanged from 'unchanged';
import {handleActions} from 'redux-actions';

import {ACTION_TYPES} from 'app/stores/application/applicationActions';

export const INITIAL_STATE = {
  preventDoubleClick: false,
};

export const enabledPreventDoubleClickHandler = (state) => {
  state.preventDoubleClick = true;
};

export const disabledPreventDoubleClickHandler = (state) => {
  state.preventDoubleClick = false;
};

export const applicationReducer = handleActions(
  {
    [ACTION_TYPES.ENABLE_PREVENT_DOUBLE_CLICK]: enabledPreventDoubleClickHandler,
    [ACTION_TYPES.DISABLE_PREVENT_DOUBLE_CLICK]: disabledPreventDoubleClickHandler,
  },
  INITIAL_STATE
);

export default applicationReducer;
