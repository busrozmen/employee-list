import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import './Search.css'
import { getSearch } from '../../actions/searchActions';
import { getEmployees } from "../../actions/employeesActions";
import { getNewEmployees } from "../../actions/employeesActions"

const Search = () => {

  const [employees,showFilter] = useSelector((state) => [state.employeesReducer,state.showFilterReducer])
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');

  const showList = () => {
    dispatch(getSearch(searchValue,companyValue,true))
    const _newEmployees = employees.filter(data =>{
      return data.name.toLowerCase().indexOf(searchValue)>=0 && data.company.toLowerCase().indexOf(companyValue)>=0 ? data :
        searchValue === '' && data.company.toLowerCase().indexOf(companyValue)>=0 ? data :
        data.name.toLowerCase().indexOf(searchValue)>=0 && companyValue === '' ? data :
        searchValue === '' && companyValue === '' ? data : ''
    });

    dispatch(getNewEmployees(_newEmployees))
  }
  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])
  return(
    <div className={`search-wrapper ${showFilter ? 'd-none d-sm-flex' : ''}`}>
      <input type="text" placeholder='Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value.toLowerCase())} />
      <select  onChange={(e) => setCompanyValue(e.target.value.toLowerCase())}>
        <option value=''>Company</option>
        {employees.map((employee,index) => (
         <option key={index} value={employee.company} >{employee.company}</option>
        ))}
      </select> 
      <button type="button" className="btn btn-primary" onClick={() => showList()}>Search</button>
    </div>
  )
}
export default Search;