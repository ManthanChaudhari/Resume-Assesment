import { useState } from 'react'
import Resume from './Components/Resume'
import { FaGithub , FaUser , FaMailBulk } from 'react-icons/fa'

function App() {
  return (
    <div className='flex h-screen justify-center items-center'>
     <div className='lg:flex'>
      <div className='bg-white shadow-lg py-4 px-4  h-[500px] w-[350px] lg:h-[650px] lg:w-[500px]'>
         <Resume/>
      </div>
      <div className='flex lg:flex-col gap-y-5 gap-x-5 justify-center h-full'>
        <div className='bg-[#dddddda3] p-2 hover:bg-[#c2c2c2] cursor-pointer'><a href ='https://github.com/ManthanChaudhari'><FaGithub/></a></div>
        <div className='bg-[#dddddda3] p-2 hover:bg-[#c2c2c2] cursor-pointer'><a href ='https://manthan-portfolio-one.vercel.app'><FaUser/></a></div>
        <div className='bg-[#dddddda3] p-2 hover:bg-[#c2c2c2] cursor-pointer'><a href ='mailto:chaudharimanthan05@gmail.com'><FaMailBulk/></a></div>
      </div> 
     </div>
    </div>
  )
}

export default App
