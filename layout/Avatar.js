import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components"
import { Buffer } from 'buffer';
import Button from "../util/Button"
import { profile } from '../api/authApi';
import Loader from '../components/loader/Loader';
import {FcOldTimeCamera} from "react-icons/fc"


export default function Avatar() {
    const [imagePreview,setImagePreview]=React.useState([]);
    const [loading,setLoading]=useState(true);
    const [image, setImage] =React.useState("");
    const [loadingImg,setLoadingImg]=React.useState(false)
    const [user,setUser]=useState([])
    
    const router=useRouter()    

    const toastOption={
        position: "bottom-right",
        autoclose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
    }
 
    useEffect(()=>{
      const userId=localStorage.getItem("userId")
      const id=JSON.parse(userId)
       fetch(`http://localhost:8080/office-api/auth/${JSON.parse(userId)}`)
       .then(res=>{
         return res.json()
       })
       .then(data=>{
         setLoading(false)
         setUser(data)
       })
       .catch(err=>{
         console.log(err.message)
       })
    },[])

    const proflePicture=async()=>{
        try{
        if(user){
          console.log(user.user._id)
          const {data}=await axios.post(`${profile}/${user.user._id}`,{
            avartImage:imagePreview,
            avatarImageSet:true
          })
          if(data.isSet){
            router.push("/")
          }
        }
        }catch(err){
            toast.error(err.message, toastOption)
        }
        if(!selectedAvatar){
        toast.error("Profile picture required", toastOption);
        return false 
        }
    }


  useEffect(()=>{
    if(localStorage.getItem("office-user")){
        router.push('/login')
    }
  },[router])

  const onImageChange=async(event) => {
    setLoadingImg(true)
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
               if(result.status===200) setLoading(false)
               console.log(response,result)
             
          }
        }catch(error){
           setLoadingImg(false)
           toast.error("uploading failed", toastOption);
           return false 
        }
 }
 console.log(image)
  return (
    <>
        <Container>
            {loading ? <Loader/> :
            <React.Fragment>
              <div className="title">
                  <h1>Pick an Avatar as your profile picture</h1>
              </div>
              <div className="relative">
                  <label htmlFor="file" className='flex justify-center flex-col items-center  file z-[999]  cursor-pointer left-[30px]'>
                      <FcOldTimeCamera className='text-3xl my-3'/>
                      <span className='text-lg'> Change profile picture</span>
                      <input
                        type={"file"} 
                        id='file' 
                        className='hidden'
                        onChange={onImageChange}
                      />
                  </label>
              </div>
              <Button 
              text={"Set as Profile Picture"}
              onClick={()=>proflePicture()}
              />    
            </React.Fragment>
              }
        </Container>
        <ToastContainer limit={1}/>
    </>
  )
}

const Container=styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 3rem;
     background-color: #131324;
     position: relative;
     height: 100vh;

     .title {
        h1{
           color: #fff;
        }
     }

     button{
            background-color: #997af0;
            border-radius: 0.4rem;
            cursor: pointer;
            text-transform: uppercase;
            color: #fff;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: bold;
            color: #fff;
            border: none;
            transition: 0.5s ease-in-out;
            &:hover{
                background-color: #4e0eff; 
            }
         }
`
