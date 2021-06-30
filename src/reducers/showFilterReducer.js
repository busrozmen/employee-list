import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


export const showFilterReducer = (state = initialState.showFilter, action ) => {
  switch (action.type) {
    case actionTypes.GET_MOBILE_SHOW:
      return action.payload;
    default:
      return state;
  }
};