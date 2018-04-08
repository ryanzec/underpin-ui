import {createAction} from 'redux-actions';

import * as stringUtils from 'src/utils/string';

export const ACTION_TYPES = stringUtils.namespaceStrings('DYNAMICALLY_LOADING_COMPONENTS', ['SET']);

export const set = createAction(ACTION_TYPES.SET, (setName, setData) => {
  return {
    setName,
    setData,
  };
});
