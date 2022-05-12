/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify'
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '../../styled-compnent';
import Button from "../../util/Button"
import { profile } from '../../api/authApi';
import { Loading} from "@nextui-org/react";
import {FcOldTimeCamera} from "react-icons/fc"
import DefaultProfilePicture from './DefaultProfilePicture';
import {toastOption} from "../../helpers/toastOption"
import { clearEmployeeId } from '../../redux/employee/employeeInfoSlice';


export default function ProfilePicture() {
    const [imagePreview,setImagePreview]=React.useState("");
    const [loading,setLoading]=useState(false);
    const [image, setImage] =React.useState("");
    const [user,setUser]=useState([])
    const defaultImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU'
    const router=useRouter()    
    const modal=useSelector(state=>state.modal.isProfilePicture)
    const employeeId=useSelector(state=>state.employeeInfo.employeeId)
    const dispatch=useDispatch()
    

    const proflePicture=async()=>{
      if(!imagePreview){
         return toast.error("Profile picture required!!", toastOption)
      }
        try{
          if(user){
            const res=await axios.post(`${profile}/${employeeId}`,{
              avartImage:imagePreview,
              avatarImageSet:true
            })
            if(res.status===200){
              router.push("/login")
              dispatch(clearEmployeeId())
            }
          }
          }catch(err){
            console.log(err.message)
              toast.error("Network error ", toastOption)
          }
    }

  
  const onImageChange=async(event) => {
    setLoading(true)
    try{
        if (event.target.files && event.target.files[0]) {
            const fileUpload=event.target.files[0]
             setImage(URL.createObjectURL(event.target.files[0]));
             const response = await axios({
               method: 'GET',
               headers:{
                 "Content-Type":"image/jpeg"
               },
                  url:"https://115mf3u9df.execute-api.eu-west-3.amazonaws.com/default/collegeImgPreview"
               })
                   // PUT request: for upload url to S3
               const result = await fetch(response.data.uploadURL, {
                       method: 'PUT',
                       body:fileUpload
               })
               if(result.status===200) {
                setImagePreview(result.url.split("?")[0]) 
                setLoading(false)  
               }
          }
        }catch(error){
          setLoading(false)
           toast.error("uploading failed", toastOption);
           return false 
        }
  }
  return (
    <>  
     <DefaultProfilePicture proflePicture={proflePicture}/>     
        <ToastContainer limit={1}/>
    </>
  )
}

