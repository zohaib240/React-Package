import React from 'react'
import './index.css'

const  Button =({name,func})=> {
  return (
    <>
    <button className='px-3 py-1 rounded bg-blue-400 m-5' onClick={func}>{name}</button>
    </>
  )
}

export default Button