import React from 'react'

const Project = () => {
  return (
    <div className='md:p-5 flex flex-col'>
      <p>Project page</p>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
        <div className='flex flex-col  border border-red-500 justify-center items-center shadow-lg shadow-red-600'><span className='text-xl font-semibold text-red-500'>Weather Forcast App</span>
        <iframe className='w-full h-[400px] md:m-3' title='project1' src="https://myapp2-tjfc.vercel.app/" frameborder="0"></iframe>
        <a rel="noreferrer" href="https://myapp2-tjfc.vercel.app/" target='_blank' className='border rounded-lg m-1 bg-blue-600 text-white hover:bg-blue-800'>Go to the page</a>
        </div>
        <div className='flex flex-col  border border-red-500 justify-center items-center shadow-lg shadow-red-600'><span className='text-xl font-semibold text-red-500'>Weather Forcast App</span>
        <iframe className='w-full h-[400px] md:m-3' title='project1' src="https://sandeepkumar3171.github.io/My-Hair-Studio/" frameborder="0"></iframe>
        <a href="https://sandeepkumar3171.github.io/My-Hair-Studio/" target='_blank' rel="noreferrer" className='border rounded-lg m-1 bg-blue-600 text-white hover:bg-blue-800'>Go to the page</a>
        </div>

        <div className='flex flex-col  border border-red-500 justify-center items-center shadow-lg shadow-red-600'><span className='text-xl font-semibold text-red-500'>Weather Forcast App</span>
        <iframe className='w-full h-[400px] md:m-3' title='project1' src="https://sandeepkumar3171.github.io/YouTubeClonePage/" frameborder="0"></iframe>
        <a rel="noreferrer" href="https://sandeepkumar3171.github.io/YouTubeClonePage/" target='_blank' className='border rounded-lg m-1 bg-blue-600 text-white hover:bg-blue-800'>Go to the page</a>
        </div>

        <div className='flex flex-col  border border-red-500 justify-center items-center shadow-lg shadow-red-600'><span className='text-xl font-semibold text-red-500'>Weather Forcast App</span>
        <iframe className='w-full h-[400px] md:m-3' title='project1' src="https://project-hard-code-api.vercel.app/" frameborder="0"></iframe>
        <a rel="noreferrer" href="https://project-hard-code-api.vercel.app/" target='_blank' className='border rounded-lg m-1 bg-blue-600 text-white hover:bg-blue-800'>Go to the page</a>
        </div>
       
      </div>
      
    </div>
  )
}

export default Project
