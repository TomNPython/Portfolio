import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import codepen from './assets/codepen.png'
import email from './assets/email.png'

function Home() {
    return (
        <div id='home-background'>
        <div className='wrapper'>
        <div className='welcome-box'>
        <img src="https://avatars0.githubusercontent.com/u/42147472?s=460&v=4" className='welcome-box-item main-image' alt='
        creator Tom Nicholson'></img>
        <div className='welcome-box-item welcome'>
        <h1>Thomas Nicholson</h1>
        <h3 id='subtitle'><em>Web Developer</em></h3>
        <h4>Welcome to my portfolio! Click the links above to check out my skills and projects.</h4>
        <div className="welcome-social">
                            <div className="welcome-divider"></div>
                            <a href="https://www.linkedin.com/in/tom-nicholson-04429089/" target='_blank' rel='noopener noreferrer'>
                                <img className='welcome-social' src={linkedin} alt="linkedin link"/></a>
                            <a href="https://github.com/TomNPython" target='_blank' rel='noopener noreferrer'>
                                <img className='welcome-social' src={github} alt="github link"/></a>                      
                            <a href="https://codepen.io/tomnpython" target='_blank' rel='noopener noreferrer'>
                                <img className='welcome-social' src={codepen} alt="codepen link"/></a>
                            <NavLink to="/Contact">
                                <img className='welcome-social' src={email} alt="contact link"/></NavLink>
                        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home


// FIX CONTACT LINK /PORTFOLIO/CONTACT does it work?