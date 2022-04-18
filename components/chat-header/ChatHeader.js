import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import { Avatar } from '@nextui-org/react';


export default function ChatHeader() {
    


  const currentChat=useSelector(state=>state.users.chat)

  return (
    <>
      <SingleChatDiv>
          <div className="chat-header">
              <div className="user-details">
                  <div className="avatar">
                    <Avatar src={`${currentChat.contact.avartImage}`} alt="avatar"
                        />
                  </div>
                  <div className="username">
                      <h1>{currentChat.contact.username}</h1>
                  </div>
              </div>
          </div>
      </SingleChatDiv>
    </>
  )
}


const SingleChatDiv=styled.div`
    padding-top: 1rem;
    
     .chat-header{
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 0.2rem;
         .user-details{
             display: flex;
            align-items: center;
            gap: 1rem;

            .avatar{

                img{
                    height: 3rem;
                }
            }
            .username{
                h1{
                    color: #fff;
                    font-size: large;
                    font-weight: bolder;
                }
            }
         }
     }
`