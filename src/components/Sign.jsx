import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleprovider } from '../firebase/config'
import {  useNavigate} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import Select from './Select'



const Sign = () => {
const navigate = useNavigate();
 async function signin(){
  await signInWithPopup(auth,googleprovider);
 
  navigate("/select");
 
  }

  
  return (
    <>
    
    <div className='flex justify-center items-center '>
     
      <div className='bg-[#ECD4EC] h-[600px] w-[600px] rounded-2xl m-12 shadow-2xl  '>
        <img src='logo.png' className='w-[200px] h-[200px] ml-52'></img>
         <h1 className='text-4xl font-mono ml-60 mt-5'>Sign in</h1>
       <div className='flex justify-center items-center flex-col gap-4 m-4 '>
        <div>
        </div>
        <input type='text' placeholder="username" className='h-10 w-xs bg-amber-50 rounded-2xl shadow-2xs p-4' />
        
       <input type='text' placeholder='password' className='h-10 w-xs bg-amber-50 rounded-2xl shadow-2xs p-4' />
       <div className=' h-10 w-xs bg-amber-50 rounded-2xl shadow-2xs justify-center items-center p-2'>
        <select className='w-2xs flex justify-center items-center'>
  <option value="User">User</option>
  <option value="Doctor">Doctor</option>
  <option value="Admin">Admin</option>
</select>
      
       </div>
       <button className='h-10 w-60 bg-amber-50 rounded-2xl shadow-2xs cursor-pointer font-bold text-[#39063C]' > Sign In</button>
       <button
  className="flex items-center justify-center gap-2 h-10 w-60 bg-amber-50 rounded-2xl shadow-2xl cursor-pointer font-semibold text-[#39063C]"
  onClick={signin}
>
  <FcGoogle size={18} /> Sign in with Google
</button>
      </div>
       </div>
      </div>
    </>
  )
}

export default Sign