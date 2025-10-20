import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../pages/Footer';

const About = () => {
   const navigate = useNavigate();
      function Nav(){ 
          navigate("/sign");
      }
  return (

    <>
    <section id="about">
      <div className='flex justify-center items-center '>
      <div className='h-[500px] w-6xl bg-fuchsia-100 flex justify-center items-center flex-col mt-32 rounded-2xl shadow-2xl' >
      <div className='text-3xl text-[#39063C] font-mono font-bold  '>Facilities offered by us:</div>
   <div className='flex  justify-center items-center mb-20'>
      <div className='flex flex-row gap-4 m-16'> 
        <div className='border-2 border-b-fuchsia-950 rounded-2xl hover:bg-white cursor-pointer h-[200px] w-[200px] flex justify-center items-center' onClick={Nav}><img src="teeth.png"></img></div>
         <div className='border-2 border-b-fuchsia-950 rounded-2xl hover:bg-white cursor-pointer h-[200px] w-[200px] flex justify-center items-center' onClick={Nav}><img src="lung.png" ></img></div>
          <div className='border-2 border-b-fuchsia-950 rounded-2xl hover:bg-white cursor-pointer h-[200px] w-[200px] flex justify-center items-center'onClick={Nav}><img src="heart.png"></img></div>
           <div className='border-2 border-b-fuchsia-950 rounded-2xl hover:bg-white cursor-pointer h-[200px] w-[200px] flex justify-center items-center'onClick={Nav}><img src="brain.png"></img></div>
        </div>
        </div>
      </div>
      </div>

  <div className='flex justify-center items-center'>
  <div className='bg-[#39063C]  h-[500px] w-7xl rounded-2xl mb-20 mt-32 '>
     <div className='flex justify-center items-center gap-10 mt-30 rounded-2xl'>
       <div>
         <div className='h-[270px] w-[270px] bg-[#A987A8] rounded-2xl' onClick={Nav}></div>
       </div>

       <div>
         <div className='h-[270px] w-[270px] bg-[#A987A8] rounded-2xl'onClick={Nav}></div>
       </div>

       <div>
         <div className='h-[270px] w-[270px] bg-[#A987A8] rounded-2xl' onClick={Nav}></div>
       </div>
     </div>
   </div>
 </div>
  
  


</section>
    </>
  )
}

export default About