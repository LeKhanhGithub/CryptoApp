import React, {useRef, useState, useEffect} from "react"

import { useNavigate } from "react-router-dom"
import { ChatEngine, NewChatForm } from 'react-chat-engine'
import { signOut } from "firebase/auth";
import { auth } from "./firebase"
import { useAuth } from "./AuthContext"
import axios from "axios"
import Loader from "../Loader"
import ChatLogo from "../../images/ChatLogo.png";
import { LoginOutlined } from "@ant-design/icons";

export default function Chats() {
  console.log("chay vao ham chats")
  const navigate = useNavigate()// dieu huong
  const {user} = useAuth(); //use context
  const [loading, setLoading] = useState(true);

  console.log(user);

  async function handleLogout() {
    await signOut(auth)
    .then(() => {
       navigate("/forum")
    }).catch((error) => {
      console.log(error);
    });
  }

  const getFile = async (url) => {
      const response = await fetch(url);
      const data = await response.blob();

      return new File([data], "userPhoto.jpg", {type: 'image/jpeg'})
  }

  useEffect(() =>{
      if(!user){
        console.log("chua co thong tin dang nhap tu firebase");
        navigate('/');

          return
      }
      console.log(user);
      console.log("co thong tin dang nhap roi tu firebase");
      console.log("check thong tin dang nhap voi thong tin user tren chat engine");
      console.log("bat dau lay goi api voi thong tin lay tu info vua dang nhap")
      axios.get('https://api.chatengine.io/users/me/', {
          headers: {
              "project-id": "86868580-86fe-40cf-ad2d-b2102e1e5da2",
              "user-name": user.email,
              "user-secret": user.uid,
          }
      })
      .then((me) => {
        console.log(me);
        console.log("nguoi dung nay da co tren chat engine dang nhap thanh cong");
          setLoading(false);
      })
      .catch(() => {
        console.log("nguoi dung nay chua duoc tao nen phai bat dau tao user nay tren chat engine")
          let formdata = new FormData()
          formdata.append('email', user.email)
          formdata.append('username', user.email)
          formdata.append('secret', user.uid)
          getFile(user.photoURL)
            .then((avatar) => {
              console.log("lay anh thanh cong:", avatar)
                formdata.append('avatar', avatar, avatar.name);
                console.log("goi api tao user len chat engine voi anh va thong tin dang nhap firebase")
                axios.post( "https://api.chatengine.io/users/", 
                    formdata,
                    {headers: {"private-key": "7f9bb0e1-23d7-41da-9846-6a75319ace59"}},
                    
                )
                .then(() => {
                  console.log("tao nguoi dung nay thanh cong")
                  setLoading(false)
                })
                .catch((error) => {
                  console.log("tao nguoi dung that bai: ", error)
                });
            })

      })
  })
  
  if(!user ||loading ) return <Loader />;

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          <img src = {ChatLogo} alt ="logo" />
        </div>
        <di>Hello {user.displayName}!</di>

        <div onClick={handleLogout} className='logout-tab'>
          {console.log("chay vao giao dien")}
          <LoginOutlined /> LogOut
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='86868580-86fe-40cf-ad2d-b2102e1e5da2'
        userName={user.email}
        userSecret={user.uid}
      />
      
    </div>
  )
}