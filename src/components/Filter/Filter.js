import React, { useState } from 'react'
import { useSelector, useDispatch} from "react-redux";
import { getFilter } from '../../actions/filterActions';
import { getNewEmployees } from "../../actions/employeesActions"
import { mobileFilterShow } from '../../actions/filterActions';
import './Filter.css'

const Filter = () => {
  
  const [newEmployees,search,showFilter] = useSelector((state) => [state.newEmployeesReducer,state.searchReducer,state.showFilterReducer])
  const [jobValue, setJobValue] = useState('');
  const [areaValue, setAreaValue] = useState('');
  const dispatch = useDispatch()

  const showList = () => {
    dispatch(getFilter(jobValue,areaValue))
    const _newEmployees = newEmployees.filter(data =>{
      return data.job.toLowerCase().indexOf(jobValue)>=0 && data.area.toLowerCase().indexOf(areaValue)>=0 ? data : 
      jobValue === '' && data.area.toLowerCase().indexOf(areaValue)>=0 ? data : 
      data.job.toLowerCase().indexOf(jobValue)>=0 && areaValue === '' ? data :
      jobValue === '' && areaValue === '' ? data:''
    });
    dispatch(getNewEmployees(_newEmployees))
  }
  return(
    <>
    {search.activeList &&  
    <div className={`col-12 col-md-3 col-lg-2 filter-wrapper ${showFilter ? 'd-flex' :'d-none d-sm-flex'}`}>
      <span className='close-icon d-block d-sm-none' onClick={() => dispatch(mobileFilterShow(false))}>x</span>
      <input type="text" placeholder='Job Title' value={jobValue} onChange={(e) => setJobValue(e.target.value.toLowerCase())} />
      <select onChange={(e) => setAreaValue(e.target.value.toLowerCase())}>
        <option value=''>Area</option>
        {newEmployees.length >0 && newEmployees.map((employee,index) => (
         <option key={index} value={employee.area} >{employee.area}</option>
       ))}
      </select> 
      <button type="button" className="btn btn-primary" onClick={() => showList()}>Filter</button>
    </div>
    }
    </>
  )
}
export default Filter;