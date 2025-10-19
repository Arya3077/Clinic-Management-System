import React from 'react'
import { Link } from 'react-router-dom'
import userpage from './Userpage'
import { useNavigate } from 'react-router-dom'

const Reports = () => {
    const navigate= useNavigate();
   function back(){
    navigate("/userpage")
   }
  return (
   <>
     <div className='flex justify-center items-center m-4'> 
            <div className="nav bg-[#ECD4EC]  h-12 sm:h-14 md:h-16 lg:h-16 w-7xl hover:text-[#39063C] flex justify-center 
            items-center rounded-2xl gap-14 text-2xl font-bold ">
                
                <div className='flex justify-end  w-4xl '>
                  <button onClick={back} className='p-4 cursor-pointer'>Back</button>
                </div>
                </div>
                </div>
   
   </>
  )
}

export default Reports