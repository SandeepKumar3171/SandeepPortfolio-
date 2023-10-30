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
        <div className='flex flex-row gap-5 justify-center md:justify-start md:pl-5 items-center border text-2xl'>
          <p><FaLinkedin/></p>
          <p><FaGithub/></p>
          <p><BiLogoGmail/></p>
        </div>
        </div>
        <div className='md:w-1/2 w-full p-5'>
          <p className='rounded-full bg-red-400 border-2 border-blue-500 shadow-xl shadow-red-600'><img className='rounded-full p-2 ' src={SandeepImg} alt="" /></p>
        </div>
      </div>
    </>
  )
}

export default Home
