import React from 'react'
import '../artistichumans.css/intro.css'
import work1 from '../Images/work1.jpg'
import work2 from '../Images/work2.jpg'
import close from '../Images/close.png'
import { Link } from 'react-router-dom'


function Work() {
  return (
    <>
    <div className="introMain">
    <div className="intro about work">
        <Link to={'/'} className="closeImg"><img src={close} alt="" /></Link>
        <div className="aboutContent workContent">
        <div className="aboutLeft workLeft">
            <h2>WORK</h2>
        <div className="introImg workImg"><img src={work1} alt="" /></div>
        <div className="q1">
        <h3>OUR VARIOUS WINGS OF OPERATIONS:</h3>
        <div className="p"><p>1.</p><p>Content Creation : Content Creation : We expertise in producing theatre plays and live content, theme and event based performances.</p></div>
        <div className="p"><p>2.</p><p>Artistic Humans Communities : Our Flagship youth community initiative where students, scholars and creative professionals contribute in creating innovative policies for community driven initiatives.</p></div>
        <div className="p"><p>3.</p><p>Curating Experiences : Theme based curations includes customized designing of events followed with a lineup of various artistic performances, workshops, speakers and activities.</p></div>
        </div>
        </div>
        <div className="aboutRgt workRgt">
        <div className="q2"><h3>THEATRE PRODUCTION AND EVENT BASED CURATION:</h3>
        <p>‘The Artist’ one of our most celebrated play won 10 accolades all over India including winning Best Play Award in two prestigious National Theatre Festivals. The play was released commercially in the year 2018. Our various Theatrical production collaborations includes plays like:</p>
       
        <p>-‘Hum Sab Ek Hai’ (2019) with MCF Club<br/>
        - ‘Kanchan Kachrawali’(2019) with Gulabgun Sab Seva Sanstha<br/>
        - ‘Atulya Bharat’with MCF club (2019, Short Play, Tribute to Mahatma Gandhi’s 150 birth Anniversary)</p>
       
        <div className="introImg workImg"><img src={work2} alt="" /></div>
        </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Work