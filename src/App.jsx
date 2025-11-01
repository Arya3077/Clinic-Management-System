import React from 'react'
import Nav from './components/Home'
import Home from './components/Hero'
import About from './components/About'
import Sign from './components/Sign'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Select from './components/Select'
import Userpage from './pages/Userpage'
import Adminpage from './pages/Adminpage'
import Doctorpage from './pages/Doctorpage'
import A from './pages/Appointments'
import Reports from './pages/Reports'
import Schedule from './pages/schedule'

import Prescription from './pages/Prescription'
import Dt from './pages/Dt'



const App = () => {
  return (
    <>
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/sign" element={<Sign/>} />
        <Route path="/select" element={<Select/>}/>
        <Route path='/userpage' element={<Userpage/>}/>
        <Route path='/doctorpage' element={<Doctorpage/>}/>
        <Route path='/adminpage' element={<Adminpage/>}/>
         <Route path='/appointments' element={<A/>}/>
         <Route path='/home' element={<Nav/>}></Route>
          <Route path='/reports' element={<Reports/>}></Route>
           <Route path='/schedule' element={<Schedule/>}></Route>
            <Route path='/Prescription' element={<Prescription/>}></Route>
              <Route path='/dt' element={<Dt/>}></Route>
           
           
      </Routes>
    </BrowserRouter>
   

    </>
  )
}

export default App
