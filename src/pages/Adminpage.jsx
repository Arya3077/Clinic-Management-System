import React from 'react'

const Adminpage = () => {
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
   <section id='home'>home</section>
   <section id=' list'>list</section>
   <section id='contact'>contact</section>
   </>
  )
}

export default Adminpage