import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Alert } from '@mui/material';
import Button from '../util/Button'
import InputText from '../util/InputText'
import { FormLogicHook } from '../helpers/FormLogicHook'
import {fogetPassword} from "../api/authApi"
import {RegisterMain} from "../styled-compnent/index"





export default function ForgotPassword() {
  const [loading,setLoading]=useState(false)
  const {values,handleChange}=FormLogicHook()
  const [isMessage,setIsMessage]=useState(false)

  const toastOption={
    position: "bottom-right",
    autoclose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
  useEffect(()=>{
    if(localStorage.getItem("office-user")){
      router.push('/')
    }
  })

  const sendResetPassword=async(event)=>{

    setLoading(true)
    setIsMessage(false)
   
    const {email}=values
      event.preventDefault()
        validateRegistration()
      if(validateRegistration()){
        try{
          const res=await axios.post(fogetPassword,{
          email,
         })
         if(res.status===200){
            setIsMessage(true)
         }
        console.log(res)
        if(res.status===200){
          setLoading(false)
        }
      }catch(err){
         setLoading(false)
         setIsMessage(false)
         toast.error("Either account does not exits or incorrect passsword or Email",toastOption)
      }
    
    }
     
  }
  const validateRegistration=()=>{
    const {email}=values
    if(!email){
      toast.error("Email is required!", toastOption);
      return false 
   }
     return true
  } 
  return (
     <>
       <RegisterMain className="bg-gradient-to-r from-purple-500 to-pink-500">
         <div className="brand">
            <h1>Reset Password</h1>
        </div>
         <form onSubmit={(e)=>sendResetPassword(e)}>
              <InputText 
                type={"email"}
                onChange={(e)=>handleChange(e)}
                name={"email"}
                placeholder={"Enter your email address"}
                value={values.email}
                className="block"
              />
           {isMessage && <Alert severity="success">Check your email!</Alert>}
              <Button text={loading?"please wait":"Reset"} className={"outline"}/>
              <span className='text-gray-500 text-sm '>Provide your email address to change password </span>
              <span> Back to login <Link href={"/login"} passHref>Login</Link> </span>
         </form>
       </RegisterMain>
       <ToastContainer limit={1}/>
     </>
  )
}


