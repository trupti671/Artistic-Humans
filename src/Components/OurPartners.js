import React from 'react'
import '../artistichumans.css/intro.css'
import partners from '../Images/partners.jpg'
import close from '../Images/close.png'
import { Link } from 'react-router-dom'

function OurPartners() {
  return (
    <>
<div className="introMain">
    <div className="intro partners">
        <Link to={'/'} className="closeImg"><img src={close} alt="" /></Link>
        <h2>OUR PARTNERS</h2>
        <div className="introImg partnersImg"><img src={partners} alt="" /></div>
        
    </div>
    </div>
    </>
  )
}

export default OurPartners