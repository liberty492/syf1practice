import React, { useState } from 'react';
 
const Hooks1=()=>{
  
    const name=useState("sri anjaneyam")
    const id=useState(159)
    const user=useState([101,"narayana","parsa.narayana@gmal.com"])


    return(
        <div className="container py-5">
          <h2 className="container py-2">React hooks</h2>
          <h5> {id} - {name} </h5>
          {
            user.map((res,index)=>(<li key={index}>{res}</li>))
          }
        </div>
    )
}
export default Hooks1
