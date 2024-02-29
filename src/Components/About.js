import React from "react";
import "../artistichumans.css/intro.css";
import about from "../Images/about.jpg";
import close from "../Images/close.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="introMain">
        <div className="intro about">
          <Link to={'/'} className="closeImg">
            <img src={close} alt="" />
          </Link>
              <h2>ABOUT</h2>
          <div className="aboutContent">
            <div className="aboutLeft">
              <div className="introImg aboutImg">
                <img src={about} alt="" />
              </div>
              <div className="q1">
                <h3>WHO ARE WE?</h3>
                <p>
                  Artistic Humans is a platform that represents the voice of
                  innovators, experimenters. It is a community of Young
                  Creators, Future Leaders, and Changemakers.
                </p>
              </div>
            </div>
            <div className="aboutRgt">
              <div className="q2">
                <h3>WHAT DO WE DO?</h3>
                <p>
                  We curate experiences, we connect humans, we address their
                  interest and passion. We initiate various artistry endeavors
                  that builds strong human communities driven with vision and a
                  realistic approach. In other words, we inspire, edutain and
                  tell stories in a way that our audiences are willing to hear
                  from us! We work on creating an alternative system that
                  reflects inclusiveness, creativity, equal opportunities that
                  has an innovation-driven approach enabling individuals to make
                  the most of one life as well as creating an impact that makes
                  the world a more better place to live. We are a platform that
                  represents the voice of every creative Human.
                </p>
              </div>
              <div className="q3">
                <h3>WHERE HAVE WE BEEN SO FAR?</h3>
                <p>
                  Artistic Humans has explored many verticals which had a
                  profound impact on human society - from producing theatre
                  plays, conducting theatre workshop to promoting art & theatre
                  in underprivileged areas and empowering communities through
                  various artistry initiatives, we have been working towards
                  building India’s youngest community of creators and
                  change-makers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
