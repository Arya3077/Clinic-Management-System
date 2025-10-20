import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'


const Doctorpage = () => {
  const navigate = useNavigate();
  function logout(){
    navigate("/home")
  }

  return (
     <>
    <div className='flex justify-center items-baseline-last m-4'> 
    <div className="nav bg-[#ECD4EC]  h-12 sm:h-14 md:h-16 lg:h-16 w-7xl hover:text-[#39063C] flex justify-center 
    items-center rounded-2xl gap-4 text-2xl font-bold ">
      <div className='flex fex-col gap-4' >
        <a id href='#home'>Home</a>
        <Link to='/schedule'>Schedule</Link>
         <Link to='/prescription'>Prescription</Link>
        </div>
        <div className='flex justify-end  w-4xl'>
          <button onClick={logout} className='p-4'>Logout</button>
        </div>
        </div>
    </div>
  
  
    
    <div className='flex justify-center items-center flex-col mt-4'>
    <div className='bg-[#A987A8] h-12 sm:h-14 md:h-16 lg:h-48 w-7xl rounded-2xl flex items-center justify-start p-8'>
      <img className='h-[200px] w-[200px] mb-2' src='doctor.png '></img>
      <p className='text-amber-50 font-sans text-4xl p-5'>WELCOME BACK DOCTOR!!</p>
    </div>
    </div>
  
   <section id='home'>
     <div className='flex justify-center items-center'>
       <div className='bg-[#39063C]  h-[500px] w-7xl rounded-2xl mb-20 mt-24 '>
         <h1 className='text-4xl font-mono text-white p-6'>VIEW MORE</h1>
         <div className='flex justify-center items-center gap-5 mt-10'>
           <div>
             <div className='h-[250px] w-[250px] bg-[#A987A8]'></div>
           </div>

           <div>
             <div className='h-[250px] w-[250px] bg-[#A987A8]'></div>
           </div>

           <div>
             <div className='h-[250px] w-[250px] bg-[#A987A8]'></div>
           </div>
         </div>
       </div>
     </div>
     <img src='f.png' className='p-2'></img>
   </section>
   <Footer/>
   </>
  )
}

export default Doctorpage