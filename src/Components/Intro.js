import React from 'react'
import '../artistichumans.css/intro.css'
import intro from '../Images/intro.jpg'
import close from '../Images/close.png'
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <>
    <div className="introMain">
    <div className="intro">
        <Link to={'/'} className="closeImg"><img src={close} alt="" /></Link>
        <h2>INTRO</h2>
        <div className="introImg"><img src={intro} alt="" /></div>
        <h3>OUR VISION:</h3>
        <p>“We are working on to build World’s largest community of youngest creators. Apart from that we committed to build a community and a research Centre that creates a space for every Creative Scientist who aspire to make the world better through their vision, stories and creativity. We are here to create a better structure on life approach, opportunities, future jobs, work culture and experiences that explores new boundaries of human potentials”.</p>
    </div>
    </div>
    </>
  )
}

export default Intro