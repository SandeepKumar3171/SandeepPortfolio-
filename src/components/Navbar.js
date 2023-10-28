import React from 'react'
import { Link } from 'react-router-dom'
import SandeepImg from "./Images/sandeepImg.jpg"
import {AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const clickHandler=()=>{
    console.log("Hello")


  }

  return (
    <div className='flex flex-row w-full gap-5 p-4 items-center text-center justify-between bg-black  text-lg font-semibold shadow-lg shadow-red-600'>
      <div className='flex flex-row md:gap-5 gap-2 items-center'>
       <Link to="/"><img className='w-12 rounded-full shadow-lg shadow-red-600' src={SandeepImg} alt="" /></Link>
        <Link to="/" className='hover:text-blue-400 hover:underline'><p>Sandeep</p></Link>
      </div>
      <div className='md:flex hidden flex-row gap-5'>
       <Link to="/" className='hover:text-blue-400 hover:underline'>Home</Link>
        <Link to="/about" className='hover:text-blue-400 hover:underline'>About</Link>
       <Link to="/project" className='hover:text-blue-400 hover:underline'>Project</Link>
        <Link to="/contact" className='hover:text-blue-400 hover:underline'>Contact</Link>
      </div>
      <div className='md:hidden cursor-pointer' onClick={clickHandler}><p  className='text-2xl '><AiOutlineMenu/></p></div>
    </div>
  )
}

export default Navbar
