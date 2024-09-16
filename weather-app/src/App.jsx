// import React from 'react'
// import React, { useRef, useState } from 'react'
// import axios from 'axios'
// import Card from './Components/Card'


// const App = () => {

//   const [Addweather, setAddweather] = useState([])
//   let inputRef=useRef()


//   function Checkweather(event) {
//     event.preventDefault()

//     // if input is empty

//     if (inputRef.current.value === '') {
//         alert('please enter city name')
//     }

//     // https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no
//         async function getData() {
//             try {

                
//               let weatherData = await axios(`https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${inputRef.current.value}&aqi=no`)
//                 console.log(weatherData.data);

//                 Addweather.push({...weatherData.data})
//                 setAddweather([...Addweather])
//                 console.log(Addweather);
//             } catch {
//                 alert('this city is not here')
//             }
//         }
//         getData()
//         inputRef.current.value = ''
//     }


//   return (
//     <>
//          <div>
//             <h1 className='mt-5 text-4xl font-bold text-white text-center'>Weather App</h1>
//             <form onSubmit={Checkweather} className='text-center mt-3 flex justify-center'>
//                 <input id='input' className='outline-none pl-2 w-[300px] py-3' type="text" placeholder='Enter Only city name!' ref={inputRef} /> 
//                 <button className='py-3 px-7 bg-green-600'>Check Weather</button>
//             </form>

//             <div className='flex justify-center gap-2 flex-wrap mt-3'>
//                 {Addweather.length > 0 && (Addweather.map((item,index) => (
//                     <div key={index}>
//                         <Card location={item.location} condition={item}/>
//                     </div>
//                 )))}
//             </div>
//         </div>

//     </>
//   )
// }

// export default App

// import axios from 'axios'
// import React from 'react'
// import  {useRef , useState} from 'react'

// const App = () => {

// const [weather, setweather] = useState([])
// let inputRef = useRef()


// function checkStatus(event) {
//     event.preventDefault()
//     // if input is empty
//     if (inputRef.current.value === '') {
//         alert('please enter city name')
//     }


//  async function getData(){
//     try{
        
//               let weatherData = await axios(`https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${inputRef.current.value}&aqi=no`)
//                 console.log(weatherData.data);

//                 weather.push({...weatherData.data})
//                 setweather([...weather])
//     }
//  catch{
//     alert('no city found')
//  }

//  }

//  getData()
//  inputRef.current.value = ''

// }

// function click() {
//     console.log()
//     inputRef
// }


//   return (
//     <>
//      <input type="text" placeholder='Enter City Name' ref={inputRef} />
//      <button onClick={click}>Click</button>
    
//     </>
//   )
// }

// export default App


import React from 'react'
import { useRef  , useState} from 'react'


const App = () => {
  const [todo, settodo] = useState([])
let todoVal = useRef()


  function click() {
    if (todoVal.current.value){
      todo.push(todoVal.current.value)
      settodo([...todo])
      todoVal.current.value=''
    }

    
  }

  return (
    <>
    <input type="text"  placeholder='enter city' ref={todoVal}/>
    <button onClick={click}>click</button>
  


<ul>
{todo.map((item,index)=>{
  return <div key={index}>
    <li>{item}</li>
  </div>
})

}

</ul>

</>
  )
}

export default App


