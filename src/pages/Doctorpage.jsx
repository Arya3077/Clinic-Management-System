import React from 'react'

const Doctorpage = () => {
  return (
     <>
    <div className='flex justify-center items-baseline-last m-4'> 
    <div className="nav bg-[#ECD4EC]  h-12 sm:h-14 md:h-16 lg:h-16 w-7xl hover:text-[#39063C] flex justify-center 
    items-center rounded-2xl gap-4 text-2xl font-bold">
        <a id href='#home'>Home</a>
        <a id href='#list'>list</a>
        <a id href="#Contact">Contact</a>
        <div className='flex justify-end  w-4xl'>
        </div>
        </div>
    </div>
  
  
    
    <div className='flex justify-center items-center flex-col mt-4'>
    <div className='bg-[#A987A8] h-12 sm:h-14 md:h-16 lg:h-48 w-7xl rounded-2xl flex items-center justify-start p-8'>
      <img className='h-[200px] w-[200px] mb-2' src='doctor.png '></img>
      <p className='text-amber-50 font-sans text-4xl p-5'>WELCOME BACK USER!!</p>
    </div>
    </div>
  
   <section id='home'>home</section>
   </>
  )
}

export default Doctorpage