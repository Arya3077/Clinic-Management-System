import React from 'react'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <>
    <section id="home">

    <div className='flex justify-center items-center  '>
      
        <div className='bg-[#39063C] sm:h-[300px] lg:[400px]- md:h-[600px] w-7xl rounded-2xl flex justify-center 
        items-center text-5xl text-amber-50 font-bold '>
         
            <div className='m-32'>

         <Typewriter
          options={{
            strings: ['World Class Health Facilities', 'At Your Door Step!'],
            autoStart: true,
            loop: true,
            delay: 75, 
            deleteSpeed: 50, 
          }}
          className="m-7"
        />
        </div>
     </div>
 
        
    </div>
    </section>
    </>
  )
}

export default Home