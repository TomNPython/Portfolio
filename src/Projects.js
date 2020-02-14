import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div id='projects-background'>
        <div className='wrapper'>
        <p className='projects-header'><a href='#full-stack-projects'>Full Stack Projects</a> | <a href='#api-projects'>
            API Based Projects</a> | <a href='#front-end-projects'>Front End Projects</a></p>
        <p className='projects-intro'>I have been learning about web development since early 2018. During this time I have used
            several different languages and frameworks. Below are some of my projects, listed with a 
            brief description, any languages or frameworks I used to build them, and a link to where they are hosted.
        </p>
        <h2  id='full-stack-projects'>Full Stack Projects</h2>
        <div className='projects-grid-container'>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/MernTV' 
        target='_blank' rel='noopener noreferrer'><h6>TV Series Tracker</h6>
        <img src="/assets/mern.png" alt=""/> </a>
            </div>
        <p>Tracks a user's watched TV series and allows them to rate and review.</p>
        <p>Made using: <ul><li>MongoDB</li>
        <li>Express</li>
        <li>React</li>
        <li>NodeJS</li></ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/Event-Reviewer' 
        target='_blank' rel='noopener noreferrer'><h6>Event Reviewer</h6>
        <img src="/assets/erev.png" alt=""/> </a>
            </div>
        <p>App to create, read, update, and delete reviews of recent sporting events.</p>
        <p>Made using: <ul><li>JavaScript</li>
        <li>PostgresQL</li></ul>
        </p></div>
        </div>
        <h2 id='api-projects'>API Based Projects</h2>
        <div className="projects-grid-container">
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/SwapiCompare' 
        target='_blank' rel='noopener noreferrer'><h6>SWAPI Compare</h6>
        <img src="/assets/swapi.png" alt=""/> </a>
            </div>
        <p>Uses axios calls to the Star Wars API (SWAPI) to compare any character to Luke Skywalker on various metrics.</p>
        <p>Made using: <ul><li>JavaScript</li>
        <li>Axios</li></ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/Pollution-App' 
        target='_blank' rel='noopener noreferrer'><h6>Pollution Tracker</h6>
        <img src="/assets/pollution.png" alt=""/> </a>
            </div>
        <p>App to track the Air Quality Index in cities around the world.</p>
        <p>Made using: <ul><li>JavaScript</li>
        <li>Fetch API</li></ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/TopScorers' 
        target='_blank' rel='noopener noreferrer'><h6>Top Scorers</h6>
        <img src="/assets/scorers.png" alt=""/> </a>
            </div>
        <p>Makes calls to the football data API to list the top scorers in the English Premier League and Championship.</p>
        <p>Made using: <ul><li>JavaScript</li>
        <li>Ajax</li></ul>
        </p></div>
        </div>
        <h2  id='front-end-projects'>Front End Projects</h2>
        <div className="projects-grid-container">
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/Myriorama' 
        target='_blank' rel='noopener noreferrer'><h6>Myriorama</h6>
        <img src="/assets/myriorama.png" alt=""/> </a>
            </div>
        <p>Inspired by the eponymous chapter in Phillip Pullman's <em>'The Secret Commonwealth'</em>, shuffle a deck of cards
            to produce a large mosaic image that tells a story.</p>
        <p>Made using: <ul><li>Javascript</li>
        </ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/GuessThePicture' 
        target='_blank' rel='noopener noreferrer'><h6>Guess The Picture</h6>
        <img src="../assets/guess.png" alt=""/> </a>
            </div>
        <p>A game where the user guesses a blurred image from a series of hints.</p>
        <p>Made using: <ul><li>JavaScript</li>
        </ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/PronunciationPractice' 
        target='_blank' rel='noopener noreferrer'><h6>Video Image Recorder</h6>
        <img src="/assets/pronunciation.png" alt=""/> </a>
            </div>
        <p>App to record images of a user saying an English language tongue twister.</p>
        <p>Made using: <ul><li>JavaScript</li>
        <li>WebRTC</li></ul>
        </p></div>
        </div>
        </div>
        </div>
    )
}

export default Projects