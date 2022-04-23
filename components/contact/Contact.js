import React,{useEffect, useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { Avatar } from '@nextui-org/react';
import { ContactDiv } from '../../styled-compnent/chat'
import { updateChat } from '../../redux/AllUser-slice'
import Search from '../search/Search'
import Profile from '../profile/Profile'


export default function Contact({contacts}) {
 const dispatch=useDispatch()
 const [contact,setContact]=useState("")
  const [selectedChat,setSelectedChat]=useState(undefined)
  const mainUser=useSelector(state=>state.users.user)
  


  const changeCurrentChat=(index,contact)=>{
     setSelectedChat(index) 
      dispatch(updateChat({contact}))
  }
  const otherUsers=(others,element)=>{
     const newUsers= others.filter(p=>p._id !==element?._id)
     return newUsers
  }
  const filterUser=contacts.filter(p=>{
    if(p.username.toUpperCase().includes(contact.toUpperCase())){
      return p
    }
    return null
  })
  const handleSearch=(e)=>setContact(e.target.value)
  
  return (
    <>
      <ContactDiv>
          <Profile/>
           <div>
             <Search handleSearch={handleSearch} contact={contact}/>
           </div>
           <div className="contacts">
              {filterUser.length?otherUsers(filterUser,mainUser?.mainUser?.user ).map((contact,index)=>{
                  return (
                      <div key={index}  className={`contact ${selectedChat===index? "selected":" "}`}
                     onClick={()=>changeCurrentChat(index,contact)}
                      >
                         <Avatar 
                         className='w-[60px] h-[60px]' 
                         src={`${contact.avartImage}`} 
                         alt="avatar"
                          onClick={()=>setSelectedChat(index)}
                       />
                       <div className="userName">
                           <h5>{contact.username}</h5>
                       </div>
                      </div>
                  )
               }):<h1 className="text-center">No search found</h1>}
           </div>
       </ContactDiv>
    </>
  )
}
 
