import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div   style={{

      display : "flex",
      justifyContent: "center",
      margin : "30px" ,
      gap : "30px" ,

    }}>
       <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="service">Services</Link>
    </div>
  )
}

export default Navbar