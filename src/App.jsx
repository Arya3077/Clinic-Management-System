import './App.css'
import Home from './components/Home'
import Doctor from './components/Doctor'
import Navbar from './components/Navbar'
import SignIn from './components/Sign'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Feedback from './components/Feedback'
import UserPage from './user/UserPage'
import { Link } from 'react-router-dom'
import UserNavbar from './user/Nav'
import Doctorsa from './user/Doctorsa'
import Prescription from './user/Prescription'
import Reports from './user/Reports'
import Appointments from './user/Appointments'
import AdminPage from './Admin/AdminPage'
import doctorpage from './Doctor/doctorpage'
import RoleSelect from './components/l'






const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  
  {
    path: "/sign",
    element: <SignIn />
    
    
  },

  {
    path: "/feedback",
    element: 
    <>
      
       <Navbar/>
        < Feedback/>
        </>
    
    
  },

  {
    path: "/doctor",
    element: 
    <>
      
       <Navbar/>
        < Doctor/>
        </>
    
    
},

{
  path: "/userpage",
  element: (
    <>
      <UserNavbar />
      <UserPage />
    </>
  ),
},

{
  path: "/appointments",
  element: (
    <>
      <UserNavbar />
      <Appointments />
    </>
  )
},
{
  path: "/reports",
  element: (
    <>
      <UserNavbar />
      <Reports />
    </>
  ),
},
{
  path: "/doctorsa",
  element: (
    <>
      <UserNavbar />
      <Doctorsa />
    </>
  ),
},
  
{
  path: "/adminpage",
  element: (
    <> 
      <AdminPage/>
    </>
  ),
},


{
  path: "/doctorpage",
  element: (
    <> 
      <AdminPage/>
    </>
  ),
},  

{
  path: "/l",
  element: (
    <>
      <RoleSelect />
    </>
  ),
},


 
  
])

function App() {
  return <RouterProvider router={router} />
  
}

export default App

