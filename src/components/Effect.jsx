import React, { useEffect, useState } from 'react'

export default function Effect() {
    const [name,setname] = useState("")
    const [i,seti] = useState(0)
    const [ui,setui] = useState()
    useEffect(()=>{
        setui("value of i is "+i)
        console.log("ineffect")
        return()=>
        {
            console.log("cleanuop "+i)
        }
    },[i])

  return (
    <div>Effect
        <br />
        {ui} <input type="button" value="+" onClick={()=>seti(i+1)} />
        <p>
            Enter name : <input type="text" onChange={(e)=>setname(e.target.value)} />
        </p>
    </div>
  )
}
