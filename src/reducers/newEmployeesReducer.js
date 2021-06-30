import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


export const newEmployeesReducer = (state = initialState.newEmployees, action ) => {
  switch (action.type) {
    case actionTypes.GET_NEW_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
};