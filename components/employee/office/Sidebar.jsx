/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openCompany } from '../../../redux/modal/modalSlice'
import AddCompany from './AddCompany'

const Sidebar = () => {
  const employeeCompainess=useSelector(state=>state.employeeInfo.employeeCompanies)
  const dispatch=useDispatch()

  console.log(employeeCompainess)



  return (
    <div>
       <div className="add-company">
           <AddCompany/>
       </div>
       <div className="company-lists mt-2 flex w-[100%] mx-auto flex-col h-[70vh]">
            {employeeCompainess?.employee_companies?.map(company=>{
                return <div 
                className='text-sm space-y-4 mt-2 bg-slate-500 p-2 text-white inline-flex items-center justify-between'
                key={company._id}
                  onClick={()=>{
                    dispatch(openCompany())
                  }}
                >
                  <div className="logo">
                      <Image src={company.company_profile_picture} alt="img" width={40} height={40}/>
                  </div>
                  <div className="company-name text-left cursor-pointer">
                      <h5>
                        {company.company_name}
                      </h5>
                  </div>
              </div>
            })
          }
       </div>
    </div>
  )
}

export default Sidebar