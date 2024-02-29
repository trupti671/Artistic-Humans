import React, { useState, useEffect } from 'react';
import '../artistichumans.css/navbar.css';
import artisticlogo from '../Images/artisticlogo.png';
import instawhite from '../Images/instawhite.png';
import { Link } from 'react-router-dom';
import menuicon from '../Images/menuicon.png';

function Navbar() {
  const [navStyle, setNavStyle] = useState({});
  const [menu, setMenu] = useState(true);
  const [nvs, setNvs] = useState({
    marginRight: 'auto'
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setNavStyle({
          transform: 'translateX(-400px)'
        });
      }
    };
  
    // Call handleResize on component mount
    handleResize();
  
    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);
  
    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    if (menu) {
      setNavStyle({
        transform: 'translateX(-95px)'
      });
      setNvs({
        marginRight: '0'
      });
      setMenu(false);
    } else {
      setNavStyle({
        transform: 'translateX(-340px)'
      });
      setNvs({
        marginRight: 'auto'
      });
      setMenu(true);
    }
  };

  return (
    <>
      <div className="navbarMain">
        <div className="navHead">
          <img src={artisticlogo} alt="" />
          <h2>“Empowering Art,<br/> Creating Communities”</h2>
        </div>
        <div className="navTail" style={nvs}>
          <div className="ncBtn">
            <div className="nInsta"><img src={instawhite} alt="" /></div>
            <Link to={'/contact'}><button>CONTACT US</button></Link>
          </div>
          <div className="nvcp">
          <div className="nContent nc2" style={navStyle}>
            <Link to={'/intro'}>INTRO</Link>
            <div className="vr"></div>
            <Link to={'/about'}>ABOUT</Link>
            <div className="vr"></div>
            <Link to={'/work'}>WORK</Link>
            <div className="vr"></div>
            <Link to={'/am75'}>AM75</Link>
            <div className="vr"></div>
            <Link to={'/gallery'}>GALLERY</Link>
            <div className="vr"></div>
            <Link to={'/showcase'}>SHOWCASE</Link>
          </div>
          <div className="nmenuContent">
            <img className='nmenu' src={menuicon} alt="menuicon" onClick={handleClick}/>
          
            <div className="nContent">
              <Link to={'/ourplays'}>OUR PLAYS</Link>
              <div className="vr opvr"></div>
              <Link>NOW PLAYING</Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
