import React from 'react'

function Resume() {
  return (
    <div>
      <div className='border-b-black border-b-2'>
      <h1 className='text-center text-2xl'>Manthan Chaudhari</h1>
      <div className='flex justify-center gap-x-4'>
        <a href='mailto:chaudharimanthan05@gmail.com' className='text-sm text-blue-500'>Email</a>
        <a href='https://github.com/ManthanChaudhari' className='text-sm text-blue-500'>Github</a>
        <a href='https://manthan-portfolio-one.vercel.app' className='text-sm text-blue-500'>Portfolio</a>
      </div>
      </div>
      <div className='flex flex-col gap-y-2 mt-3'>
        <div>
        <h2 className='lg:text-lg border-b-2'>EDUCATION</h2>
        <div>
           <div className='  font-bold text-sm flex justify-between'>
           <h1>Gujarat Arts & Science College</h1>
           <p>2023 - 2026</p>
           </div>
           <p className='italic text-sm'>BS Computer Science</p>
           <p className=' italic text-sm'>Ahmedabad , India</p>
        </div>
        </div>
        <div>
        <h2 className='lg:text-lg border-b-2'>TECHNICAL SKILLS</h2>
         <p className='text-sm'><span className='font-bold'>Languages : </span> Javascript</p>
         <p className='text-sm'><span className='font-bold'>Development : </span>Html , Css , React , Redux , Redux , Tailwind Css</p>
         <p className='text-sm'><span className='font-bold'>Developer Tools : </span>VS Code , Github ,Git , Vercel</p>
        </div>
        <div className='flex flex-col gap-y-3'>
        <h2 className='lg:text-lg border-b-2'>PROJECTS</h2>
           <div>
             <div className='text-sm flex  gap-x-1'>
              <p className=' font-bold'>OpenCourse</p> |
              <a href='https://open-course-three.vercel.app' className='text-blue-500 border-b-2 border-blue-500'>Live Link</a> |
              <p>React Js , Appwrite , RTK</p>
             </div>
             <ul className='text-sm' itemType=''>
              <li> &#x2022; Allow users to manage courses with functionalities to create , delete and read user-generated content , offering a dynamic and interactive experience for learners. </li>
              <li> &#x2022; Uses Appwrite for authentication ensuring security of users. </li>
             </ul>
           </div>
           <div className='hidden lg:block'>
             <div className='flex text-sm   gap-x-1'>
              <p className=' font-bold'>Mela</p> |
              <a href='https://chat-web-app-alpha.vercel.app' className='text-blue-500 border-b-2 border-blue-500'>Live Link</a> |
              <p>React Js , Appwrite , RTK</p>
             </div>
             <ul className='text-sm' itemType=''>
              <li> &#x2022; Uses WebSocket for real-time communication between clients and the server. </li>
              <li> &#x2022; Enable users to join and start meeting within the application and can send the message in the existing room. </li>
              <li> &#x2022; Integrated Appwrite for Secure authentication and authorization.</li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
