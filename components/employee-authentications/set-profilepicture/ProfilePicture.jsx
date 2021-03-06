/* eslint-disable @next/next/no-img-element */
import { Modal, Button,useModal} from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import axios from "axios"
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {FcOldTimeCamera} from "react-icons/fc"
import ButtonText from "../../../utils/Button"
import {clearEmployeeId} from "../../../redux/employee/employeeInfoSlice";
import CircleProgressbar from "../../../utils/materialUi/CircleProgressBar"
import {profile} from "../../../hooks/employeeApis"
import { toastOption } from "../../../helpers/toastOption";

export const defaultImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU'

export default function ProfilePicture() {
  const { bindings } = useModal();
  const [image, setImage] =React.useState("");
  const [loading ,setLoading]=useState(false)
  const [isProfileSet,setIsprofileSet]=useState("")
  const employeeId=useSelector(state=>state.employeeInfo.employeeId)
  const router=useRouter()  
  const dispatch=useDispatch()


  // run if users set profile pictrure
   const handleUpload = (uploadEvent) => {
    uploadEvent.persist();
    setImage(URL.createObjectURL(event.target.files[0]));
    setLoading(true)
    const [file] = uploadEvent.target.files;
    const reader = new FileReader();
    reader.onloadend =(onLoadEndEvent) => {
      const graphQuery={
        query:`
        mutation {
         update_Profile_Picture(id: "${employeeId}", update_picture: {key:"${file.name}", data:"${onLoadEndEvent.target.result.split(",")[1]}"}) {
           _id
         }
       }  
        `
       }
        fetch("http://localhost:8080/graphql",{
          method:"POST",
          mode: "cors",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(graphQuery)
        })
        .then(res=>{
          return res.json()
        })
        .then(data=>{
          dispatch(clearEmployeeId())
          setLoading(false)
          setIsprofileSet("yes it is set")
        })
        .catch(err=>{
           setLoading(false)
          console.log(err.message)
        })
       }
    reader.readAsDataURL(file);
  };

  const proflePicture=async()=>{
    try{
      if(employeeId){
        const res=await axios.post(`${profile}/${employeeId}`,{
          avartImage:defaultImg,
          avatarImageSet:true
        })
        if(res.status===200){
          dispatch(clearEmployeeId())
          router.push("/login")
        }
      }
      }catch(err){
        console.log(err.message)
        
      }
  }

  return (
    <div>
      <Modal
        fullScreen
        animated={false}
        aria-labelledby="modal-title"
        {...bindings}
        open={true}
      >     
        <Modal.Body>
          <div className="flex justify-center items-center flex-col 
          bg-[#131324] gap-3 relative h-[80vh]">
          <div className='relative w-[200px] h-[200px] self-center'>
                <div className='absolute z-50 top-[40%] left-[35%]'>
                {loading && <CircleProgressbar/>}
                </div>
                <img src={image ? image : defaultImg } alt={"profile-picture"} layout='fill' className={`${loading ? "hidden" :" block"} rounded-[50%] h-[200px]`} />
                <label htmlFor="files" className='text-5xl absolute bottom-0 right-0 mr-3x]'>
                  <FcOldTimeCamera className='text-6xl my-3 cursor-pointer'/>
                  <input
                    type={"file"} 
                    id='files' 
                    className='hidden'
                    onChange={(e)=>handleUpload(e)} 
                  />
              </label>
          </div>
              <ButtonText 
                className='bg-[#997af0] rounded-[0.4rem] cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#f0f0f0] hover:text-[#4e0eff] uppercase text-white font-extrabold border-0 py-[1rem] px-[2rem]'
                text={"Set Profile Picture"}
                onClick={()=>{
                 if(!isProfileSet){
                   return toast.error("profile picture is not set",toastOption)
                 }
                 router.push("/login")
               }}
                type="submit"
              />    
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>proflePicture()}>Skip</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer limit={1}/>
    </div>
  );
}
