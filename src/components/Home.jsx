import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Hero'
import About from './About'
import Contact from './Contact'
import Footer from '../pages/Footer'

const Nav = () => {
  return (
    <>
    <div className='flex justify-center items-baseline-last m-4'> 
    <div className="nav bg-[#ECD4EC]  h-12 sm:h-14 md:h-16 lg:h-16 w-7xl hover:text-[#39063C] flex justify-center items-center rounded-2xl gap-4 text-2xl font-bold">
        <img className='h-[100px] w-[100px]' src="logo.png"></img>
        <a id href='#home'>Home</a>
        <a id href='#about'>About</a>
        <a id href="#Contact">Contact</a>
        <div className='flex justify-end  w-4xl'>
        <Link  to='/sign' className='mr-4'>Sign In</Link>
        </div>
        </div>
    </div>

    <Home/>
    <About/>
    
    <img src='f.png' className='p-2'></img>
  <Footer/>

    </>

  )
}

export default Nav