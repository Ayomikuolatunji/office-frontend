import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import OfficeBody from './office-body/OfficeBody'
import { useDispatch } from 'react-redux'
import { fetchEmployeeCompanies } from '../../../redux/employee/employeeInfoSlice'


const Office = () => {
   const dispatch=useDispatch()     

  
  useEffect(()=>{
      dispatch(fetchEmployeeCompanies())      
  },[dispatch])

  return (
    <div className='w-[100%] h-[100%] bg-[white]'>
        <div className='flex justify-between w-full h-[100%]'>
            <div className="sidebar h-[100%] w-[20%] border-r-2">
              <Sidebar />
            </div>
            <div className="main bg-[#dfdfdf] h-[100%] w-[80%]">
               <OfficeBody />
            </div>
            <div className="right bg-[green] h-[100%] w-[15%] hidden">

            </div>
        </div>
    </div>
  )
}

export default Office