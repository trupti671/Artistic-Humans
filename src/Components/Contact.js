import React from 'react'
import '../artistichumans.css/intro.css'
import close from '../Images/close.png'
import phone from '../Images/phone.png'
import email from '../Images/email.png'
import fwhite from '../Images/fwhite.png'
import fblue from '../Images/fblue.png'
import instacolor from '../Images/instacolor.png'
import instawhite from '../Images/instawhite.png'
import twitterwhite from '../Images/twitterwhite.png'
import twitterblue from '../Images/twitterblue.png'
import linkedinblue from '../Images/linkedinblue.png'
import linkedinwhite from '../Images/linkedinwhite.png'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <>
    <div className="introMain">
    <div className="intro contact">
        <Link to={'/'} className="closeImg"><img src={close} alt="" /></Link>
        <h2>CONTACT</h2>
        <div className="contactEP"><h3><img src={email} alt="" />EMAIL:</h3></div>
        <p>artistichumansinfo@gmail.com</p>
        <div className="contactEP"><h3><img src={phone} alt="" />PHONE:</h3></div>
        <p>+91 9930732829</p>
        <div className="cSocialMedia">
        <div className="csm">
            <img src={fwhite} alt="" />
            <img className='colorimg' src={fblue} alt="" />
        </div>
        <div className="csm">
            <img src={instawhite} alt="" />
            <img className='colorimg' src={instacolor} alt="" />
        </div>
        <div className="csm">
            <img src={twitterwhite} alt="" />
            <img className='colorimg' src={twitterblue} alt="" />
        </div>
        <div className="csm">
            <img src={linkedinwhite} alt="" />
            <img className='colorimg' src={linkedinblue} alt="" />
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Contact