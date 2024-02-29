// import React from 'react'
import React, { useState, useEffect } from 'react';
import '../artistichumans.css/intro.css'
import close from '../Images/close.png'
import showcase1 from '../Images/Showcase1.jpg'
import showcase2 from '../Images/Showcase2.jpg'
import showcase3 from '../Images/Showcase3.jpg'
import showcase4 from '../Images/Showcase4.jpg'
import showcase5 from '../Images/Showcase5.jpg'
import showcase6 from '../Images/Showcase6.jpg'
import showcase7 from '../Images/Showcase7.jpg'
import showcase8 from '../Images/Showcase8.jpg'
import showcase9 from '../Images/Showcase9.jpg'
import showcase10 from '../Images/Showcase10.jpg'
import showcase11 from '../Images/Showcase11.jpg'
import showcase12 from '../Images/Showcase12.jpg'
import leftarrow from '../Images/leftarrow.png'
import rightarrow from '../Images/rightarrow.png'
import { Link } from 'react-router-dom';

function Showcase() {

    const [slide, setSlide] = useState({
        transform: "translateX(0px)",
      });

      const [sdp, setSdp] = useState()

      useEffect(() => {
        if(window.innerWidth <= 550)
        {
          setSdp(300)
        }else if(window.innerWidth > 550 && window.innerWidth <= 1024){
          setSdp(400)
        }else{
          setSdp(600)
        }
      }, [])
    
      const [n, setN] = useState(1);
    
      const left = () => {
        const trs = n === 1 ? 0 : (n - 2) * -sdp;
        setN(n === 1 ? 1 : n - 1);
    
        setSlide({
          transform: `translateX(${trs}px)`,
        });
      };
    
      const right = () => {
        const trs = n === 12 ? (12 - 1) * -sdp : n * -sdp;
        setN(n === 12 ? 12 : n + 1);
    
        setSlide({
          transform: `translateX(${trs}px)`,
        });
      };

  return (
    <>
    <div className="introMain">
    <div className="intro gallery showcase">
        <Link to={'/'} className="closeImg"><img src={close} alt="" /></Link>
        <h2>SHOWCASE</h2>
        <div className="galleryContent">
        <div className="galleryBtns">
            <img className="leftarrow" onClick={left} src={leftarrow} alt="" />
            <img className="rightarrow" onClick={right}  src={rightarrow} alt="" />
          </div>
        <div className="galleryWindow">
          <div className="galleryImgs" style={slide}>
            <img src={showcase1} alt="" />
            <img src={showcase2} alt="" />
            <img src={showcase3} alt="" />
            <img src={showcase4} alt="" />
            <img src={showcase5} alt="" />
            <img src={showcase6} alt="" />
            <img src={showcase7} alt="" />
            <img src={showcase8} alt="" />
            <img src={showcase9} alt="" />
            <img src={showcase10} alt="" />
            <img src={showcase11} alt="" />
            <img src={showcase12} alt="" />
          </div>
        </div>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Showcase