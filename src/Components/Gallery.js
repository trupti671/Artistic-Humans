// import React from 'react'
import React, { useState, useEffect } from 'react';
import '../artistichumans.css/intro.css'
import close from '../Images/close.png'
import gallery1 from '../Images/Gallery1.jpg'
import gallery2 from '../Images/Gallery2.jpg'
import gallery3 from '../Images/Gallery3.jpg'
import gallery4 from '../Images/Gallery4.jpg'
import gallery5 from '../Images/Gallery5.jpg'
import gallery6 from '../Images/Gallery6.jpg'
import gallery7 from '../Images/Gallery7.jpg'
import gallery8 from '../Images/Gallery8.jpg'
import gallery9 from '../Images/Gallery9.jpg'
import gallery10 from '../Images/Gallery10.jpg'
import gallery11 from '../Images/Gallery11.jpg'
import gallery12 from '../Images/Gallery12.jpg'
import gallery13 from '../Images/Gallery13.jpg'
import gallery14 from '../Images/Gallery14.jpg'
import gallery15 from '../Images/Gallery15.jpg'
import gallery16 from '../Images/Gallery16.jpg'
import gallery17 from '../Images/Gallery17.jpg'
import gallery18 from '../Images/Gallery18.jpg'
import gallery19 from '../Images/Gallery19.jpg'
import gallery20 from '../Images/Gallery20.jpg'
import leftarrow from '../Images/leftarrow.png'
import rightarrow from '../Images/rightarrow.png'
import { Link } from 'react-router-dom';

function Gallery() {

  const [slide, setSlide] = useState({
    transform: "translateX(0px)",
  });

  const [n, setN] = useState(1);

  const left = () => {
    const trs = n === 1 ? 0 : (n - 2) * -600;
    setN(n === 1 ? 1 : n - 1);

    setSlide({
      transform: `translateX(${trs}px)`
    });
  };

  const right = () => {
    const trs = n === 20 ? (20 - 1) * -600 : n * -600;
    setN(n === 20 ? 20 : n + 1);

    setSlide({
      transform: `translateX(${trs}px)`,
    });
  };

  return (
    <>
    <div className="introMain">
    <div className="intro gallery">
        <Link to={'/'} className="closeImg"><img src={close} alt="" /></Link>
        <h2>GALLERY</h2>
        <div className="galleryContent">
          <div className="galleryBtns">
            <img className="leftarrow" onClick={left} src={leftarrow} alt="" />
            <img className="rightarrow" onClick={right}  src={rightarrow} alt="" />
          </div>
        <div className="galleryWindow">
          <div className="galleryImgs" style={slide}>
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
            <img src={gallery5} alt="" />
            <img src={gallery6} alt="" />
            <img src={gallery7} alt="" />
            <img src={gallery8} alt="" />
            <img src={gallery9} alt="" />
            <img src={gallery10} alt="" />
            <img src={gallery11} alt="" />
            <img src={gallery12} alt="" />
            <img src={gallery13} alt="" />
            <img src={gallery14} alt="" />
            <img src={gallery15} alt="" />
            <img src={gallery16} alt="" />
            <img src={gallery17} alt="" />
            <img src={gallery18} alt="" />
            <img src={gallery19} alt="" />
            <img src={gallery20} alt="" />
          </div>
        </div>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Gallery