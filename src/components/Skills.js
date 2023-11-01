import React from 'react'
import {AiFillHtml5 } from 'react-icons/ai';
import {FaCss3Alt,FaReact,FaNodeJs } from 'react-icons/fa';
import {RiJavascriptFill } from 'react-icons/ri';
import {SiTailwindcss,SiMongodb } from 'react-icons/si';
import {TbBrandVscode } from 'react-icons/tb';


const Skills = () => {
  return (
    <div>
      <p>Skills page</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia sint veritatis facilis maxime modi ratione quos cum at. Aspernatur impedit beatae fuga ut culpa, debitis inventore quis dolore repellendus!</p>
      <p className='text-2xl font-semibold underline text-center items-center m-5 text-red-600'>SKILLS</p>
      <div className='grid md:grid-cols-4 grid-cols-2 justify-evenly gap-5 p-5 border-t m-5 pl-20'>
        <p className='text-8xl text-red-500'><AiFillHtml5/></p>
        <p className='text-8xl text-red-500'><FaCss3Alt/></p>
        <p className='text-8xl text-green-500'><RiJavascriptFill/></p>
        <p className='text-8xl text-blue-500'><SiTailwindcss/></p>
        <p className='text-8xl text-blue-500'><FaReact/></p>
        <p className='text-8xl text-green-500'><FaNodeJs/></p>
        <p className='text-8xl  text-green-500'><SiMongodb/></p>
        <p className='text-8xl text-blue-500'><TbBrandVscode/></p>
      </div>
    </div>
  )
}

export default Skills
