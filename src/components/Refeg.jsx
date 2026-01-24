import React from 'react'
import { useRef } from 'react'
export default function Refeg() {
    let nameref = useRef()
    let resultref = useRef()
    let showmsg=()=>
    {
        let msg = "welcome "+ nameref.current.value
        resultref.current.innerHTML = msg
        nameref.current.value=""
    }
  return (
    <div>Refeg:
        <p>
            Enter name : <input type="text" ref={nameref} />
            
        </p>
        <p>
            age:
            <input type="text" />
        </p>
        <input type="button" value="click here" onClick={()=>showmsg()} />
        <h1 ref={resultref}>

        </h1>
    </div>
  )
}
