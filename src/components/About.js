import React from 'react'
import {AiFillHtml5 } from 'react-icons/ai';
import {FaCss3Alt,FaReact,FaNodeJs } from 'react-icons/fa';
import {RiJavascriptFill } from 'react-icons/ri';
import {SiTailwindcss,SiMongodb } from 'react-icons/si';
import {TbBrandVscode } from 'react-icons/tb';


const About = () => {
  return (
    <div>
      <p>About page</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia sint veritatis facilis maxime modi ratione quos cum at. Aspernatur impedit beatae fuga ut culpa, debitis inventore quis dolore repellendus!</p>
      <p>SKILLS</p>
      <div className='grid md:grid-cols-4 grid-cols-2 justify-evenly gap-5 p-5 border'>
        <p className='text-8xl'><AiFillHtml5/></p>
        <p className='text-8xl'><FaCss3Alt/></p>
        <p className='text-8xl'><RiJavascriptFill/></p>
        <p className='text-8xl'><SiTailwindcss/></p>
        <p className='text-8xl'><FaReact/></p>
        <p className='text-8xl'><FaNodeJs/></p>
        <p className='text-8xl'><SiMongodb/></p>
        <p className='text-8xl'><TbBrandVscode/></p>
      </div>
    </div>
  )
}

export default About
