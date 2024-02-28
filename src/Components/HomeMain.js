import React from 'react'
import hmbg from '../Images/hmbg.png'
import Navbar from './Navbar'
import '../artistichumans.css/home.css'

function HomeMain() {
  return (
    <div className='homeMain'>
        <Navbar/>
        <div className="hmBubbles">
            <div className="b b1"></div>
            <div className="b b2"></div>
        </div>
        <div className="hMain">
            <img src={hmbg} alt="hmbg" />
            <img src={hmbg} alt="hmbg" />
        </div>

    </div>
  )
}

export default HomeMain