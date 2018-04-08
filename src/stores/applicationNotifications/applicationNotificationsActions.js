import {createAction} from 'redux-actions';

import * as stringUtils from 'src/utils/string';

export const ACTION_TYPES = stringUtils.namespaceStrings('APPLICATION_NOTIFICATIONS', [
  'ADD',
  'UPDATE',
  'REMOVE',
  'RESET',
]);

export const add = createAction(ACTION_TYPES.ADD);
export const update = createAction(ACTION_TYPES.UPDATE, (id, notification) => {
  return {
    id,
    notification,
  };
});
export const remove = createAction(ACTION_TYPES.REMOVE);
export const reset = createAction(ACTION_TYPES.RESET);
