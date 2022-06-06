import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {VscArrowLeft} from "react-icons/vsc"
import { closeCompany} from '../../../../redux/modal/modalSlice'

const CompanySIdebar = () => {
    const isCompanyOpen = useSelector(state => state.modal.isCompanyOpen)
    const dispatch=useDispatch()
    const selectedCompany=useSelector(state=>state.employeeCompanyInfo.selectedCompany)

      console.log(selectedCompany)

     let str=0
     let opacity=0
     if(isCompanyOpen===100){
      str=`-${100}%`
      opacity=0
     }else if(isCompanyOpen===0){
      str=`${isCompanyOpen}%`
      opacity=1
     }


  return (
    <div className={`w-[100%] h-[100%] 
    ml-[${str}]  transition-[margin-left] duration-300 absolute top-0 right-0 left-0 bottom-0 opacity-[${opacity}]`}>
      <div className="go-back">
        <button className="go-back-btn" onClick={()=>{
          dispatch(closeCompany())
        }}
        >
          go back
        </button>
      </div>
     <main>
       {selectedCompany?.company_name}
     </main>
    </div>
  )
}

export default CompanySIdebar