import React from 'react'

const Project = () => {
  return (
    <div className='p-5 flex flex-col'>
      <p>Project page</p>
      <div className='grid grid-cols-2'>
      <iframe className='w-full h-[400px]' title='project1' src="https://myapp2-tjfc.vercel.app/" frameborder="0"></iframe>
      <iframe  title='project2' className='w-full h-[400px]' src="https://project-hard-code-api.vercel.app/" type="" />
      </div>
      
    </div>
  )
}

export default Project
