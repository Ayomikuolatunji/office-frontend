import React, { useState } from 'react'
import {FiEdit} from "react-icons/fi"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify'
import { toastOption } from '../../helpers/toastOption';

export default function Role({employeeData}) {
    const [edit,setEdit]=useState(true)
    const [role,setRole]=useState(employeeData?.role)

    
    const handleChange=(e)=>{
       setRole(e.target.value)
    }
    const graphQuery={
        query:`   
        mutation {
            update_Employee_Role(id:"${employeeData._id}",role_update:{role:"${role}"})
         {
           _id
         }
       }
        `
      }
    const Edit=()=>{
        setEdit(!edit)
        if(edit){
          fetch("http://localhost:8080/graphql",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(graphQuery)
          })
          .catch(err=>{
            console.log(err.message)
          })
        }
        if(!role){
          return  toast.error("Role can't be empty",toastOption)
      }
    }
    
  return (
    <div className="username mt-6 bg-white p-3">
        <h5 className='text-blue-400'>Your role</h5>
        <div className='flex justify-between items-center pt-2'> 
            <input type="text" 
            defaultValue={role} 
            className={`border-r-0 outline-none border-t-0 border-l-0 bg-none ${edit? "border-b-0" :"border-b-[2px] border-blue-500"}`} disabled={edit} 
            onChange={(e)=>handleChange(e)}/>
            <FiEdit className='text-2xl cursor-pointer' onClick={()=>Edit()}/>
        </div>
        <ToastContainer limit={1}/>
    </div>
  )
}
