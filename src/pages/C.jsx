import React from 'react'
import { useNavigate } from 'react-router-dom'

const C = () => {
     const navigate = useNavigate();
    function Nav(){ 
        navigate("/appointments");
    }
  return (
    
    <>
    <div>
        <div className='ml-40 text-2xl font-extrabold mt-28 '>Choose your category → </div>
    </div>
    <div className='flex  justify-center items-center mb-20'>
      <div className='flex flex-row gap-4 m-16'> 
        <div className='border-2 border-b-fuchsia-950 rounded-2xl hover:bg-fuchsia-100 cursor-pointer h-[200px] w-[200px] flex justify-center items-center' onClick={Nav}><img src="teeth.png"></img></div>
         <div className='border-2 border-b-fuchsia-950 rounded-2xl  hover:bg-fuchsia-100 cursor-pointer h-[200px] w-[200px] flex justify-center items-center' onClick={Nav}><img src="lung.png" ></img></div>
          <div className='border-2 border-b-fuchsia-950 rounded-2xl  hover:bg-fuchsia-100 cursor-pointer h-[200px] w-[200px] flex justify-center items-center'onClick={Nav}><img src="heart.png"></img></div>
           <div className='border-2 border-b-fuchsia-950 rounded-2xl  hover:bg-fuchsia-100 cursor-pointer h-[200px] w-[200px] flex justify-center items-center'onClick={Nav}><img src="brain.png"></img></div>
        
        
      </div>
    </div>
    
    
    </>
  )
}

export default C