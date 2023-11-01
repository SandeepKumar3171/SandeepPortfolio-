import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center'>
      <p className='text-2xl font-semibold underline text-center items-center m-5 text-red-600'>Contact Me</p>
      <div className='flex flex-row gap-5 justify-center md:pl-5 items-center p-2 text-2xl'>
          <a title='go to my Linkedin page' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sandeep-kashyap-336a69239/' className='hover:text-blue-600 transform skew-y-12 animate-spin hover:animate-bounce' ><FaLinkedin/></a>
          <a title='go to my github page' target='_blank' rel="noreferrer" href='https://github.com/SandeepKumar3171'  className='hover:text-blue-600 transform skew-y-12 animate-spin hover:animate-bounce'><FaGithub/></a>
          <a href="mailto:/sandeepidkk@gmail.com" target="_blank" rel="noreferrer" title='you can mail me'  className='hover:text-blue-600 transform skew-y-12 animate-spin hover:animate-bounce text-red-500'><BiLogoGmail/></a>
        </div>
    </div>
  )
}

export default Contact
