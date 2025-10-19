import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Select = () => {
    
  const [role, Setrole] = useState('User');
  const navigate = useNavigate();
function handle(){
    
    if (role=="User"){
        navigate("/userpage");}
    else if(role=="Doctor"){
          navigate("/doctorpage");
    }
     else if(role=="Admin"){
          navigate("/adminpage");
    }
  }
return (
  <>
  <div className='flex justify-center items-center'>
        <div className='bg-[#ECD4EC] h-[600px] w-[600px] rounded-2xl m-12 shadow-2xl '>
              <div className='flex justify-center m-14'>
               <h1 className='text-5xl'>Select your Role</h1>
               </div>
               <div className='flex justify-center m-14'>
               <select className='bg-amber-50 text-black rounded-2xl h-14 w-2xs m-2 flex justify-center items-center' value={role} onChange={e => Setrole(e.target.value)}>
                  <option  className='rounded-2xl h-14 w-2xs m-2 flex justify-center items-center' value="User">User</option>
                  <option className='rounded-2xl h-14 w-2xs m-2 flex justify-center items-center' value="Doctor">Doctor</option>
                  <option className='rounded-2xl h-14 w-2xs m-2 flex justify-center items-center'  value="Admin">Admin</option>
               </select>
                </div>
<div className='flex justify-center items-center'>
               <button
          onClick={handle}
          className="bg-purple-600 text-white py-2  hover:bg-purple-700 h-14 rounded-2xl w-2xs"
        >
          Continue
        </button>
      </div> 
        </div>
    </div>
    </>   
   
  )
}

export default Select