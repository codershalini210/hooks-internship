import React, { useRef } from 'react'

export default function Login(props) {
    let usernameref = useRef()
    let pwdref = useRef()
    let msgref = useRef()
    let checkLogin = ()=>
    {
        if(usernameref.current.value=="admin" && pwdref.current.value=="123456")
        {
            props.islogin(true)
            // alert("login success")
        }
        else
        {
            msgref.current.innerHTML="Invalid User"
        }
    }
  return (
    <div>Login:
        <p>
            Enter username:
            <input type="text" ref={usernameref}/>
        </p>
        <p>
            Enter PAssword:
            <input type="password" ref={pwdref}/>
        </p>
        <input type="button" value="Login" onClick={()=>checkLogin()} />
        <h2 style={{color:"red"}} ref={msgref}></h2>
    </div>
  )
}
