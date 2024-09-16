
import React, { useEffect } from "react" 

const User = (userName,func) => {
    const age = 22

  useEffect(()=>{
    console.log('component mount');
    
    return ()=>{
   console.log('component unmount');
    
    }
  },[])  


  return (
    <>
    <h1>{userName}</h1>
    <button onClick={()=>func(age)}></button>
    </>
  )
}

export default User