import React from 'react'
import { useState, useEffect } from 'react'


const home = () => {
  const [data, setdata] = useState(null)

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => {
      console.log(json)
    
    })
    .catch(err => console.log(err))

  async function GetData() {

   const response= await fetch  ('https://fakestoreapi.com/products')
   const res = await response.json()  
    setdata(res)      
    console.log('res');
    
    
  }
  GetData()
}, [])

  return (
    <>
    {data ? data.map((item)=>{
       return <div key={item.id}>
          <h1>Title: {item.title}</h1>
          <h1>price: {item.price}</h1>
          <h1>Description: {item.description}</h1>
          <hr />
        </div>
      }): <h1>Loading...</h1>}

    </>
  )
}

export default home