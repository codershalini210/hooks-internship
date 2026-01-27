import React, { useState } from 'react'
import Login from './Login'

export default function Home() {
    const [islogin,setislogin] = useState(false)
    let homeui =<div> 
        Welcome user 
        <input type="button" value="logout"/></div>
  return (
    <div>
        {islogin?homeui:<Login islogin={setislogin}></Login>}
    </div>
  )
}
