import React from 'react'

const Project = () => {
  return (
    <div className='md:p-5 flex flex-col'>
      <p>Project page</p>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
        <div className='flex flex-col  border border-red-500 justify-center items-center text-xl font-semibold text-red-500'><span>Weather Forcast App</span>
        <iframe className='w-full h-[400px] md:m-3' title='project1' src="https://myapp2-tjfc.vercel.app/" frameborder="0"></iframe>
        <a href="https://myapp2-tjfc.vercel.app/" target='_blank'>Go to the page</a>
        </div>
        <div className='flex flex-col  border border-red-500 justify-center items-center text-xl font-semibold text-red-500'><span>Weather Forcast App</span>
        <iframe  title='project2' className='w-full h-[400px] m-3' src="https://sandeepkumar3171.github.io/My-Hair-Studio/" type="" />   
        </div>
        <div className='flex flex-col  border border-red-500 justify-center items-center text-xl font-semibold text-red-500'><span>Weather Forcast App</span>
        <iframe  title='project2' className='w-full h-[400px] m-3' src="https://sandeepkumar3171.github.io/YouTubeClonePage/" type="" />   
        </div>
        <div className='flex flex-col  border border-red-500 justify-center items-center text-xl font-semibold text-red-500'><span>Weather Forcast App</span>
        <iframe  title='project2' className='w-full h-[400px] m-3' src="https://project-hard-code-api.vercel.app/" type="" />   
        </div>
      
      </div>
      
    </div>
  )
}

export default Project
