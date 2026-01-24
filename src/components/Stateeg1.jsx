import React, { useState } from 'react'
export default function Stateeg1() {
    const [i,seti] =useState(0)
    let addbtn =   <input type="button" value=" Add to Cart" onClick={()=>seti(1)} />
   let counterui =<div>
        <input type="button" value="-" disabled={i==0?true:false}
         onClick={()=>seti(i-1)} />    {i}
        <input type="button" value="+" disabled={i==5?true:false}
         onClick={()=>seti(i+1)}/>
        </div>
  return (
    <div>Stateeg1
        <br />
        {i==0?addbtn:counterui}              
    </div>
  )
}
