import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserState(props) {
  let userDetail = JSON.parse(localStorage.getItem('EcomUser'))
    const[user, setUser] = useState({
        login : userDetail ? userDetail.login : false,
        email : userDetail ? userDetail.email : ""
    })

    function loginUser(ans){
      console.log(ans)
      localStorage.setItem('EcomUser',JSON.stringify({login:true,email:ans.email}))
      setUser({login:true,email:ans.email})
    }

    function logout(){
      localStorage.setItem('EcomUser',JSON.stringify({login:false,email:""}))
      setUser({login:false,email:""})
    }
    
  return (
    <UserContext.Provider value={{user,setUser,loginUser, logout}}>
      {props.children}
    </UserContext.Provider>
  )
}
