import React from 'react'

const Footer = () => {
  return (
   <>
    <div className='border p-2 h-fit md:flex flex-row justify-around grid grid-cols-2 gap-5'>
      <div className='flex flex-col items-center'>
      <p>Footer</p>
      <p>Footer</p>
      <a href="http:///api.whatsapp.com/send?phone=9616403152" target="_blank" rel="noopener noreferrer">whatsapp</a>
      </div>
      <div className='flex flex-col items-center'>
      <p>Footer</p>
      <p>Footer</p>
      </div>
      <div className='flex flex-col items-center'>
      <p>Footer</p>
      <p>Footer</p>
      </div>
      <div className='flex flex-col items-center'>
      <p>Footer</p>
      <p>Footer</p>
      </div>
     
    </div>
    </>
  )
}

export default Footer
