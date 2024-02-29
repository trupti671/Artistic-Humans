import './App.css';
import About from './Components/About';
import Am75 from './Components/Am75';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import HomeMain from './Components/HomeMain';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import OurPartners from './Components/OurPartners';
import Showcase from './Components/Showcase';
import Work from './Components/Work';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../src/artistichumans.css/ahmq.css';
import OurPlays from './Components/OurPlays';

function App() {
  return (
    // <>
    // <Navbar/>
    // <Home/>
    // <Intro/>
    // <About/>
    // <Work/>
    // <Am75/>
    // <Contact/>
    // <Gallery/>
    // <Showcase/>
    // </>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='/' element={<HomeMain/>}/>
            <Route path='intro' element={<Intro/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='work' element={<Work/>}/>
            <Route path='am75' element={<Am75/>}/>
            <Route path='gallery' element={<Gallery/>}/>
            <Route path='showcase' element={<Showcase/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='ourplays' element={<OurPlays/>}/>
            <Route path='ourPartners' element={<OurPartners/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
