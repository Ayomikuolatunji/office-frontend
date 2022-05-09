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
    const Edit=()=>{
        if(!role){
            return  toast.error("Role can't be empty",toastOption)
        }
        setEdit(!edit)
    }
    
  return (
    <div className="username mt-6 bg-white p-3">
        <h5 className='text-blue-400'>Your role</h5>
        <div className='flex justify-between items-center pt-2'> 
            <input type="text" 
            defaultValue={role} 
            className="border-r-0 outline-none border-t-0 border-l-0 bg-none" disabled={edit} 
            onChange={(e)=>handleChange(e)}/>
            <FiEdit className='text-2xl cursor-pointer' onClick={()=>Edit()}/>
        </div>
        <ToastContainer limit={1}/>
    </div>
  )
}