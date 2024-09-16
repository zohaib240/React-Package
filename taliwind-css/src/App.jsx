import  { useRef, useState } from 'react'
import Button from './button'
import "./App.css"

function App() {
    const [todo,setTodo] = useState([])
    const todoVal=useRef()

    function add(event) {
      event.preventDefault()
      todo.push(todoVal.current.value)
      setTodo([...todo])
      console.log(todo);
      
    }
  return (
    <>
    <div>
    <h1 className='mt-12 ' >Todo App</h1>
    <input className='mt-12  '  type="text" placeholder='enter'  />
    <Button name='click' func={add} />
    </div>
    </>
  )
}

export default App