import Head from 'next/head';
import React,{useEffect} from "react"
import { useRouter } from 'next/router';
import Chat from "../layout/Chat"
import { useDispatch } from 'react-redux';
import { currentUser } from '../redux/AllUser-slice';
import { singleUser } from '../api/authApi';




export default function Home() {
  const router = useRouter()
  const dispatch=useDispatch()

  useEffect(()=>{
    const userId=localStorage.getItem("userId")
     fetch(`${singleUser}/${JSON.parse(userId)}`)
     .then(res=>{
       return res.json()
     })
     .then(mainUser=>{
        dispatch(currentUser({mainUser}))
     })
     .catch(err=>{
       console.log(err.message);
       console.log("for testing purpose")
     })
  })
  
  useEffect(()=>{
     if(!localStorage.getItem("office-user")){
        router.push('/login')
     }
  },[router])


  return (
    <div>
      <Head>
        <title>Office Room</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       {/* <Chat/> */}
        <h1 className="text-3xl font-bold underline bg-regal-blue">
        Hello world!
      </h1>
    </div>
  )
}
