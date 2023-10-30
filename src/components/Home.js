import React from 'react'
import SandeepImg from "./Images/sandeepImg.jpg"
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Home = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col items-center m-5'>
        <div className='md:w-1/2 w-full p-2 text-center md:text-left'>
        <p >Hello, It's Me</p>
        <p className='text-3xl font-semibold'>Sandeep Kashyap</p>
        <p><span>And I'm a</span> <span className='text-lg font-semibold text-blue-500'>MERN Stack Developer</span></p>
        <p className='text-start mt-6'>Dedicated MERN stack developer with expertise in
          dynamic web apps, excelling in both backend with
          Node.js, Express.js, MongoDB, and frontend using
          React.js.
        </p>
        <div className='flex flex-row gap-5 justify-center md:justify-start md:pl-5 items-center p-2 text-2xl'>
          <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sandeep-kashyap-336a69239/' className='hover:text-blue-600 transform skew-y-12 animate-spin hover:animate-bounce' ><FaLinkedin/></a>
          <a target='_blank' rel="noreferrer" href='https://github.com/SandeepKumar3171'  className='hover:text-blue-600 transform skew-y-12 animate-spin hover:animate-bounce'><FaGithub/></a>
          <a href="mailto:/sandeepidkk@gmail.com" target="_blank" rel="noreferrer"  className='hover:text-blue-600 transform skew-y-12 animate-spin hover:animate-bounce text-red-500'><BiLogoGmail/></a>
          <button className='transition duration-150 ease-in-out '>click me</button>
        </div>
        </div>
        <div className='md:w-1/2 w-full p-5'>
          <p className='rounded-full bg-red-400 border-2 border-blue-500 shadow-xl shadow-red-600 '><img className='rounded-full p-2 ' src={SandeepImg} alt="" /></p>
        </div>
      </div>
    </>
  )
}

export default Home
