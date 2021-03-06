import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useDispatch } from 'react-redux'
import CompanySidebar from './company/CompanySidebar'
import { fetchEmployeeCompanies } from '../../redux/employee/employeeCompanySlice'


const Office = () => {
   const dispatch=useDispatch()     

  
  useEffect(()=>{
      dispatch(fetchEmployeeCompanies())      
  },[dispatch])

  return (
    <div className='w-[100%] h-[100%]  relative overflow-hidden'>
          <Sidebar />
          <CompanySidebar/>
    </div>
  )
}

export default Office