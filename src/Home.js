import React from 'react';
import './home.css';

function Home() {
    return (
        <div id='home-background'>
        <div className='wrapper'>
        <div className='welcome-box'>
        <img src="https://avatars0.githubusercontent.com/u/42147472?s=460&v=4" className='welcome-box-item main-image' alt='
        creator Tom Nicholson'></img>
        <div className='welcome-box-item welcome'>
        <h1>Thomas Nicholson, Front-End Developer</h1>
        <h3>Welcome to my portfolio.</h3>
        <h4>Please click the links above to check out some of my skills and projects.</h4>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home