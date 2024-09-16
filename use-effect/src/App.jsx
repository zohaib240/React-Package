
// import React, { useState } from 'react'
// import CustomButton from './Components/CustomButton'

// function App() {
// const [Showbtn, setShowbtn] = useState(true)
// const [btnValue, setbtnValue] = useState('hello')

// const updateValue = ()=>{
//       const value = prompt("enter updated value");
//       setbtnValue(value)
//     }

//   return (
//     <>
//       <h1>Hello</h1>
//       <button onClick={()=> setShowbtn(!Showbtn)}>btn</button>
//       <button onClick={updateValue}>update btn</button>
//       {Showbtn ? <CustomButton  title={btnValue} color="green"/> : null}
//       </>
    
    
//   )
// }

// export default App








// revision



// import React , {useState} from 'react'

// function App() {
// const [addcounter, setAddcounter] = useState(0)

// function Add() {
//   setAddcounter(addcounter=>addcounter  + 1)
//   setAddcounter(addcounter=>addcounter  + 1)
//   setAddcounter(addcounter=>addcounter  + 1)
 
  
// }

//   return (
//     <>
//     <h1>hell{addcounter}</h1>
//     <button onClick={Add} >add</button>
//     </>
//   )
// }

// export default App





// import React from 'react'
// import Card from './Components/Card'

//  const App = () => {


//   return (
//     <>
//     <h1></h1>
//     <Card title='sdmsdsdsmdnsmdnsmdsnmdnmsdn' description='hhhhhhhhhhhhhhhhhjjjjjjj' price='55555555555555'  />
//     <Card title='sdmsdsdsmdnsmdnsmdsnmdnmsdn' description='hhhhhhhhhhhhhhhhhjjjjjjj' price='55555555555555' />
//     </>
//   )

// }
// export default App


// import React,{useEffect , useState} from 'react'
// import User from './Components/User'

// const App = () => {
//  const [userName, setUserName] = useState('zohaib')
//  const [userAge, setUserAge] = useState(22)
//  const [userComp, setUserComp] = useState(false)


//  useEffect(() => {
//   console.log("App component mounted")
// } , [userAge])

// // data get from children (user.jsx)

// function getData(age) {
//   console.log("get data from children component")
//   console.log(age);
//   setUserAge(age)
// }

//   return (
//     <>
//     <h1>hello{userName}</h1>
//     <h1>hello{userAge}</h1>
//     {userComp ? <User userName={userName} func={getData} /> : null}
//     <button onClick={() => setUserComp(!userComp)}> user component</button>
//     <button onClick={() => setUserName("farhan")}> username</button>
//     <button onClick={() => setUserAge("25")}> userAge</button>

    
    
//     </>
//   )
// }

// export default App




import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [data , setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
      .catch(err => console.log(err))

    async function getData (){
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const res = await response.json();
      setData(res)

      console.log(res)
    }

    getData()


  }, [])


  return (
    <>
      <h1>Hello world! {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>add {counter}</button>
      {data ? data.map((item)=>{
        return <div key={item.id}>
          <h1>Name: {item.name}</h1>
          <h1>Email: {item.email}</h1>
          <hr />
        </div>
      }): <h1>Loading...</h1>}
    </>
  )
}

export default App


