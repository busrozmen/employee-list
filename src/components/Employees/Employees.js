import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import notFound from '../../assets/notfound.png'
import filterIcon from '../../assets/filter.svg'
import { mobileFilterShow } from '../../actions/filterActions';
import './Employees.css'
import InfiniteScroll from 'react-infinite-scroll-component';

const Employees = () => {
  const [search,newEmployees] = useSelector((state) => [state.searchReducer, state.newEmployeesReducer])
  const dispatch = useDispatch()
  const [items, setItems] = useState([])
  const [count, setCount] = useState(1)
  const showFilter = () => {
    dispatch(mobileFilterShow(true))
  }
  const fetchMoreData = () => {
    setTimeout(() => {
        setCount( count+1 )
        setItems(items.concat(newEmployees.slice(5*count,5*(count+1))))
    }, 1500);
  };
  useEffect(() => {
    setItems(newEmployees.slice(0,5))
  }, [newEmployees])
  return(
    <>
    { !search.activeList && <p className='error-message'>Please search to see the listing</p>}
    { search.activeList && items.length<=0 && <p className='error-message'>No employees were found matching your search criteria</p>}

    { search.activeList && items.length>0 &&
    <>
    <div className='filter-btn d-block d-sm-none'>
      <hr />
    <button type="button" className="btn" onClick={() => showFilter()}><img src={filterIcon} alt='filter'/>Filter</button>
      <hr />
    </div>
    <InfiniteScroll className='list-wrapper'
      dataLength={items.length}
      next={() => fetchMoreData()}
      hasMore={true}
      loader={newEmployees.length === items.length ? '' : <h4>Loading...</h4>}
      >
      {
        items.map((employee,index)=>(
          <div className='employee-card p-3' key={index}>
            <img src={employee.photo ? employee.photo : notFound} alt='employee'/>
            <div className='info-wrapper'>
              <h4>{ employee.name }</h4>
              <h6>{ employee.company }</h6>
              <h6>{ employee.job } - { employee.jobdescription }</h6>
            </div>
          </div>
        )) 
      }
    </InfiniteScroll>
    </>
    }
    </>
  )
}
export default Employees;