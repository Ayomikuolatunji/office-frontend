import axios from 'axios'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { registerCompany } from '../../api/authApi'
import { FormLogicHook } from '../../helpers/FormLogicHook'
import InputText from '../../util/InputText'
import SelectCompany from './SelectCompany'
import SelectCountry from './SelectCountry'
import Button from "../../util/Button"

export default function RegisterCompanyForm() {
 const  {values, handleChange}=FormLogicHook()
 const country=useSelector(state=>state.country.seletedCountry)
 const company=useSelector(state=>state.companies.selectedCompany)
 const company_location=`${values.company_address}, ${country} `


 const handleSubmit=async(event)=>{
     event.preventDefault()
     const res=await axios(registerCompany,{
          company_email:values.company_email,
          company_location:company_location,
          company_type:company,
          company_name:values.company_name,
          company_password:values.company_password
     })
     console.log(res)
 } 

  return (
    <form className="right-div bg-gradient-to-r from-purple-500 to-pink-500 mx-a" onSubmit={(e)=>handleSubmit(e)}>
        <div className="text">
            <h3>Register your company</h3>
        </div>
        <div className="normal-input">
            <InputText 
                text="text"
                name={"company_name"}
                value={values.company_name}
                onChange={(e)=>handleChange(e)}
                placeholder={"Enter your  company name"}
            />
        </div>
         <div className="normal-input">
            <InputText 
                text="email"
                value={values.company_email}
                name={"company_email"}
                onChange={(e)=>handleChange(e)}
                placeholder={"Enter your company email address"}
            />
        </div>
        <div className="normal-input">
            <InputText 
               text="password"
               name={"company_password"}
               value={values.company_password}
               onChange={(e)=>handleChange(e)}
               placeholder={"Enter your company account password"}
            />
        </div>
          <div className='w-[70%]  flex mx-auto mf'>
             <SelectCountry/>
             <SelectCompany/>
          </div>
          <div className="normal-input">
                <textarea
                    text="text"
                    name={"company_address"}
                    value={values.company_address}
                    onChange={(e)=>handleChange(e)}
                    placeholder={"Enter your company state, street and city"}
                    className="w-full p-5 bg-gray-100 hover:border-[1px] hover:border-[#997af0] rounded-[0.4rem]"
                />
             </div>
             <div className="submit mt-5 w-full flex justify-center ">
                 <Button text={"Submit"} />
             </div>
    </form>
  )
}
