import * as unchanged from 'unchanged';
import {handleActions} from 'redux-actions';

import {ACTION_TYPES} from 'app/stores/dynamicallyLoadingComponents/dynamicallyLoadingComponents.actions';

export const INITIAL_STATE = {
  one: [],
  two: [],
  three: [],
};

export const setHandler = (state, {payload: {setName, setData}}) => {
  return unchanged.set(`${setName}`, setData, state);
};

export const dynamicallyLoadingComponents = handleActions(
  {
    [ACTION_TYPES.SET]: setHandler,
  },
  INITIAL_STATE
);

export default dynamicallyLoadingComponents;
