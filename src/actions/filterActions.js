import * as actionTypes from './actionTypes'

export const getFilter = (job,area) => {
  return {
    type: actionTypes.GET_FILTER,
    payload: {job, area}
  }
}
export const mobileFilterShow = (show) => {
  return {
    type: actionTypes.GET_MOBILE_SHOW,
    payload: show
  }
}
