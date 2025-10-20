import React from 'react'
import { Link } from 'react-router-dom'
import Dt from './Dt'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Home from '../components/Hero'


const Adminpage = () => {
  const navigate=useNavigate()
  function dnav(){
navigate("/dt")
  }
  return (
   <>
    <div className='flex justify-center items-baseline-last m-4'> 
    <div className="nav bg-[#ECD4EC]  h-12 sm:h-14 md:h-16 lg:h-16 w-7xl hover:text-[#39063C] flex justify-center 
    items-center rounded-2xl gap-7 text-2xl font-bold">
       <Link to="/Dt">Doctor List</Link>
     
        
        <a id href="#Contact">Statistics</a>
        <div className='flex justify-end  w-4xl'>
          <Link to="/home">Log Out</Link>
        </div>
        </div>
    </div>
  <div className='flex justify-center items-center flex-col mt-4'>
    <div className=' h-64 w-7xl rounded-2xl flex items-center justify-center p-8 gap-10 '>
    
      <div className='bg-[#ECD4EC] h-[200px] w-[200px] flex items-center justify-center text-3xl text-[#39063C] shadow-2xl rounded-2xl ' onClick={dnav}>100 Doctors</div>
       <div className='bg-[#ECD4EC] h-[200px] w-[200px]  flex items-center justify-center text=[#39063C] text-xl shadow-2xl rounded-2xl '>1000 registered Users</div>
        <div className='bg-[#ECD4EC] h-[200px] w-[200px]  flex items-center justify-center text-xl text-[#39063C] shadow-2xl rounded-2xl'>View total statistics</div>
    </div>
    </div>
    
   <div className='flex justify-center items-center'>
      <div className='bg-[#39063C]  h-[500px] w-7xl rounded-2xl mb-20 mt-32 '>
         
      </div>
    </div>
    <img src='f.png' className='p-2'></img>
  <Footer/>
   </>
  )
}

export default Adminpage