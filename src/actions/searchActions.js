import * as actionTypes from './actionTypes'

export const getSearch = (name,company,activeList) => {
  return {
    type: actionTypes.GET_SEARCH,
    payload: {name, company, activeList}
  }
}
