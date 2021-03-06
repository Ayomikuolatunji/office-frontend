import { useCallback, useState } from 'react';
import { ToastContainer,toast } from 'react-toastify'
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Grid, Paper } from '@mui/material';
import InputText from '../../../utils/InputText';
import { FormLogicHook } from '../../../helpers/FormLogicHook'
import {setPassword} from "../../../hooks/employeeApis";
import { toastOption } from '../../../helpers/toastOption';
import CustomButton from '../../../utils/CumstomButton';




export default function ResetPassword() {
  const [loading,setLoading]=useState(false)
  const router = useRouter()
  const {values,handleChange}=FormLogicHook()
  const { id , code } = router.query


  const validateRegistration=useCallback(()=>{
    const {password}=values
    if(password.length < 5){
     toast.error("Your paswword should be 8 characters long!", toastOption);
     return false 
    }
    return true
  },[values])

  const submitLogin=useCallback(async(event)=>{
    setLoading(true)
    const {password}=values
      event.preventDefault()
        validateRegistration()
      if(validateRegistration()){
        try{
          const res=await axios.post(setPassword,{
          userId:id,
          resetToken:code,  
          password
         })
         if(res.status===200){
          setLoading(false)
          router.push("/login")
         }
      console.log(res)
      }catch(err){
         setLoading(false)
         toast.error("Either account does not exits or incorrect passsword or Email",toastOption)
      }
    
    }
  },[validateRegistration, values,router, id, code])

  return (
     <div className="bg-[url('/images/office.jpg')] bg-center bg-no-repeat bg-cover pt-5 pb-5 overflow-hidden h-screen flex justify-center items-center">
       <Grid sx={{marginTop :"7.5rem"}}>
            <Paper className="w-[400px] mx-auto mt-[20px] p-[20px]">
            <Grid align = "center" sx = {{padding : "0.75rem 0.45rem"}}>  
                <h3 style={{fontFamily : "Roboto"}}>
                NEW PASSWORD
                </h3>   
              </Grid>
         <form onSubmit={(e)=>submitLogin(e)}>
           <InputText 
                type={"password"}
                onChange={(e)=>handleChange(e)}
                name={"password"}
                label = {"Enter email account"}
                value={values.password}
                variant = {"outlined"}
                fullwidth
            />
          <CustomButton
              onClick={submitLogin}
              type = {"button"}
              text={loading?"please wait":"Reset"} 
              variant={"contained"}
              fullwidth
              />
         </form>
         </Paper>
         </Grid>
       <ToastContainer limit={1}/>
     </div>
  )
}


