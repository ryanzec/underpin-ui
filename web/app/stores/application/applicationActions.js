import {createAction} from 'redux-actions';

import * as stringUtils from 'src/utils/string';

export const ACTION_TYPES = stringUtils.namespaceStrings('APPLICATION', [
  'ENABLE_PREVENT_DOUBLE_CLICK',
  'DISABLE_PREVENT_DOUBLE_CLICK',
  'SHOW_CHROME',
  'HIDE_CHROME',
  'TOGGLE_CHROME',
]);

export const enabledPreventDoubleClick = createAction(ACTION_TYPES.ENABLE_PREVENT_DOUBLE_CLICK);
export const disabledPreventDoubleClick = createAction(ACTION_TYPES.DISABLE_PREVENT_DOUBLE_CLICK);
export const showChrome = createAction(ACTION_TYPES.SHOW_CHROME);
export const hideChrome = createAction(ACTION_TYPES.HIDE_CHROME);
export const toggleChrome = createAction(ACTION_TYPES.TOGGLE_CHROME);
