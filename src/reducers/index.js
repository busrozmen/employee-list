import { combineReducers } from "redux";
import { employeesReducer } from "./employeesReducer";
import { searchReducer } from "./searchReducer";
import { filterReducer } from "./filterReducer";
import { newEmployeesReducer } from "./newEmployeesReducer";
import { showFilterReducer } from "./showFilterReducer";

const reducers = combineReducers({
  employeesReducer,
  searchReducer,
  filterReducer,
  newEmployeesReducer,
  showFilterReducer
});
export default reducers;