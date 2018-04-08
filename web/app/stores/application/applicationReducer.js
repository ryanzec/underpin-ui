import * as unchanged from 'unchanged';
import {handleActions} from 'redux-actions';

import {ACTION_TYPES} from 'app/stores/application/applicationActions';

export const INITIAL_STATE = {
  preventDoubleClick: false,
  showChrome: true,
};

export const enabledPreventDoubleClickHandler = (state) => {
  return unchanged.set('preventDoubleClick', true, state);
};

export const disabledPreventDoubleClickHandler = (state) => {
  return unchanged.set('preventDoubleClick', false, state);
};

export const showChromeHandler = (state) => {
  return unchanged.set('showChrome', true, state);
};

export const hideChromeHandler = (state) => {
  return unchanged.set('showChrome', false, state);
};

export const toggleChromeHandler = (state) => {
  return unchanged.set('showChrome', !state.showChrome, state);
};

export const applicationReducer = handleActions(
  {
    [ACTION_TYPES.ENABLE_PREVENT_DOUBLE_CLICK]: enabledPreventDoubleClickHandler,
    [ACTION_TYPES.DISABLE_PREVENT_DOUBLE_CLICK]: disabledPreventDoubleClickHandler,
    [ACTION_TYPES.SHOW_CHROME]: showChromeHandler,
    [ACTION_TYPES.HIDE_CHROME]: hideChromeHandler,
    [ACTION_TYPES.TOGGLE_CHROME]: toggleChromeHandler,
  },
  INITIAL_STATE
);

export default applicationReducer;
