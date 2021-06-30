import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


export const filterReducer = (state = initialState.filter, action ) => {
  switch (action.type) {
    case actionTypes.GET_FILTER:
      return action.payload;
    default:
      return state;
  }
};