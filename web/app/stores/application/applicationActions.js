import {createAction} from 'redux-actions';

import * as stringUtils from 'src/utils/string';

export const ACTION_TYPES = stringUtils.namespaceStrings('APPLICATION', [
  'ENABLE_PREVENT_DOUBLE_CLICK',
  'DISABLE_PREVENT_DOUBLE_CLICK',
]);

export const enabledPreventDoubleClick = createAction(ACTION_TYPES.ENABLE_PREVENT_DOUBLE_CLICK);
export const disabledPreventDoubleClick = createAction(ACTION_TYPES.DISABLE_PREVENT_DOUBLE_CLICK);
