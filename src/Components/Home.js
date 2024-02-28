import React from 'react'
import hmbg from '../Images/hmbg.png'
import '../artistichumans.css/home.css'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Home() {
  
  return (
    <>
     
    <div className='homeBg'>
    
    <Outlet/>
        
    </div>
    </>
  )
}

export default Home