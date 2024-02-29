import React from 'react'
import '../artistichumans.css/ourplays.css'
import op from '../Images/op.jpg'
import leftarrow from '../Images/leftarrow.png'
import close from '../Images/close.png'
import { Link } from 'react-router-dom'

function OurPlays() {
  return (
    <div className='ourPlays'>
        <div className="opTitle">                                                                                                                                        
            <h1>Our Plays</h1>
            <Link to={'/'} className="closeImg"><img src={close} alt="" /></Link>
        </div>
        <div className="allplays">
            <div className="op">
                <img src={op} alt="" className='poster'/>
                <div className="opdesc">
                    <h2>Play Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam minus obcaecati,</p>
                    <div className="wnd">
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Writer</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Director</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="op">
                <img src={op} alt="" className='poster'/>
                <div className="opdesc">
                    <h2>Play Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam minus obcaecati,</p>
                    <div className="wnd">
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Writer</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Director</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="op">
                <img src={op} alt="" className='poster'/>
                <div className="opdesc">
                    <h2>Play Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam minus obcaecati,</p>
                    <div className="wnd">
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Writer</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Director</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="op">
                <img src={op} alt="" className='poster'/>
                <div className="opdesc">
                    <h2>Play Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam minus obcaecati,</p>
                    <div className="wnd">
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Writer</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Director</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="op">
                <img src={op} alt="" className='poster'/>
                <div className="opdesc">
                    <h2>Play Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam minus obcaecati,</p>
                    <div className="wnd">
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Writer</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Director</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="op">
                <img src={op} alt="" className='poster'/>
                <div className="opdesc">
                    <h2>Play Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam minus obcaecati,</p>
                    <div className="wnd">
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Writer</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                        <div className="wd">
                            <img src={""} alt="" />
                            <div>
                                <i>Director</i>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default OurPlays