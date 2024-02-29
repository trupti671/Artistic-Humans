import React, { useState, useEffect } from 'react';
import '../artistichumans.css/intro.css';
import am75 from '../Images/am75.png';
import close from '../Images/close.png';
import { Link } from 'react-router-dom';

function Am75() {

    const [text, setText] = useState('');
  const [showingText, setShowingText] = useState(true);

  useEffect(() => {
    const words = ['SHOWS', 'LOCATIONS', 'INSTITUTIONS'];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let intervalId;

    const typeNextChar = () => {
      const currentWord = words[currentWordIndex];
      const nextChar = currentWord.charAt(currentCharIndex);
      setText((prevText) => prevText + nextChar);
      currentCharIndex++;

      if (currentCharIndex === currentWord.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setShowingText(false);
          setText('');
          currentWordIndex = (currentWordIndex + 1) % words.length;
          currentCharIndex = 0;
          setShowingText(true);
          intervalId = setInterval(typeNextChar, 200); // Typing speed: 100ms per character
        }, 2000); // Change text after 1 second
      }
    };

    intervalId = setInterval(typeNextChar, 200); // Typing speed: 100ms per character

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="introMain">
    <div className="intro about work am75">
    <Link to={'/'} className="closeImg"><img src={close} alt="" /></Link>
            <h2>AMRIT MAHOTSAV 75×75×75</h2>
        <div className="aboutContent workContent am75Content">
        <div className="aboutLeft workLeft am75Left">
        <div className="introImg workImg am75Img"><img src={am75} alt="" /></div>
        <div className="t75"><div className="typing">75 {text}</div></div>
        <p>As India marks 75 years of Independence and celebrates Azadi Ka Amrit Mahotsav, our project <strong>Amrit Mahotsav - 75 x 75 x 75</strong> aims to celebrate the spirit of freedom and the people who fought for our independence, bringing theatre creators on one platform across geographies. We will stage the play 'Azad Hind Ki Chi Gatha' (The story of Independent India) across 75 locations, with 75 shows with 75 college/institutions. Students of the same college with prepare and present the play within their own college auditorium in Hindi-Marathi.</p>
        </div>
        <div className="aboutRgt workRgt am75">
        <div className="q1"><h3>WHY ARE WE DOING THIS PROJECT?</h3>
        <p>The project will boost and encourage theatre activities, groups and theatre makers across institutions will get an opportunity to work on a common goal and can also explore opportunities to work with Artistic Humans, creating more opportunities to collaborate and celebrate the spirit of creation. With this venture, we will also work towards building the Artistic Humans Art and Community Centre in collaboration with partner institutions to support artistic practices and endeavours. This will be only possible with the support of institutions.</p>
        </div>
       
        <div className="q2">
        <h3>WHY IS SPREADING OF ART AND THEATRE IMPORTANT?</h3>
        <p>The world is now covered in a web of internet-assisted learning programs, where you can find everything you need in seconds. They get to have degrees and diplomas in a few clicks. In such a world, we feel that it is important to make the fruits of education and social responsibility available by using a more impactful tool; performance. One of the world’s oldest texts, Naatyashastra written by the legendary sage, Bharata talks about how every performance has scientific dimensions and how the spectator plays just an important role such as the performer.</p>
        </div>
        <Link to={'/ourPartners'}><h3 className='checkout' ><i>CHECK OUT OUR PARTNERS</i></h3></Link>

        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Am75;
