import * as actionTypes from './actionTypes'

export const getEmployeesSuccess = (employees) => {
  return {
    type: actionTypes.GET_EMPLOYEES_SUCCESS,
    payload: employees
  }
}

export const getEmployees = () => {
  let url = 'https://5f7335deb63868001615f557.mockapi.io/list';
  return async (dispatch) => {
    const res = await fetch(url);
    const data = await res.json();
    return dispatch(getEmployeesSuccess(data));
  }
}

export const getNewEmployees = (employees) => {
  return {
    type: actionTypes.GET_NEW_EMPLOYEES,
    payload: employees
  }
}