import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import Logout from '../logout/Logout'
export default function SingleChat({currentUser}) {


  const currentChat=useSelector(state=>state.users.chat)
  console.log(currentChat)


  return (
    <>
      <SingleChatDiv>
          <div className="chat-header">
              <div className="user-details">
                  <div className="avatar">
                    <img src={`data:image/svg+xml;base64,${currentChat.contact.avartImage}`} alt="avatar"
                        />
                  </div>
                  <div className="username">
                      <h1>{currentChat.contact.username}</h1>
                  </div>
              </div>
              <Logout/>
          </div>
          <div className="message">

          </div>
          <div className="message-input">

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