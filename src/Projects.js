import React from 'react';
import './Projects.css';
import mern from './assets/mern.png';
import erev from './assets/erev.png';
import guess from './assets/guess.png';
import myriorama from './assets/myriorama.png';
import scorers from './assets/scorers.png';
import pollution from './assets/pollution.png';
import pronunciation from './assets/pronunciation.png';
import swapi from './assets/swapi.png';
import americanizer from './assets/americanizer.png';
import heatmap from './assets/heatmap.png'

function Projects() {
    return (
        <div id='projects-background'>
        <div className='wrapper'>
        <p className='projects-header'><a href='#full-stack-projects'>Full Stack Projects</a> | <a href='#api-projects'>
            API Based Projects</a> | <a href='#front-end-projects'>Front End Projects</a></p>
        <p className='projects-intro'>I have been studying web development since early 2018. During this time I have created projects
            using multiple languages and frameworks. Some of my most recent projects can be found below, listed with a 
            brief description, what they were built with, and a link to their Github repositories.
        </p>
        <h2  id='full-stack-projects'>Full Stack Projects</h2>
        <div className='projects-grid-container'>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/MernTV' 
        target='_blank' rel='noopener noreferrer'><h6>TV Series Tracker</h6>
        <img src={mern} alt=""/> </a>
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
        <img src={erev} alt=""/> </a>
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
        <img src={swapi} alt=""/> </a>
            </div>
        <p>Uses axios calls to the Star Wars API (SWAPI) to compare any character to Luke Skywalker on various metrics.</p>
        <p>Made using: <ul><li>JavaScript</li>
        <li>Axios</li></ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/Pollution-App' 
        target='_blank' rel='noopener noreferrer'><h6>Pollution Tracker</h6>
        <img src={pollution} alt=""/> </a>
            </div>
        <p>App to track the Air Quality Index in cities around the world.</p>
        <p>Made using: <ul><li>JavaScript</li>
        <li>Fetch API</li></ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/TopScorers' 
        target='_blank' rel='noopener noreferrer'><h6>Top Scorers</h6>
        <img src={scorers} alt=""/> </a>
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
        <img src={myriorama} alt=""/> </a>
            </div>
        <p>Inspired by the eponymous chapter in Phillip Pullman's <em>'The Secret Commonwealth'</em>, shuffle a deck of cards
            to produce a large mosaic image that tells a story.</p>
        <p>Made using: <ul><li>Javascript</li>
        </ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/GuessThePicture' 
        target='_blank' rel='noopener noreferrer'><h6>Guess The Picture</h6>
        <img src={guess} alt=""/> </a>
            </div>
        <p>A game where the user guesses a blurred image from a series of hints.</p>
        <p>Made using: <ul><li>JavaScript</li>
        </ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/PronunciationPractice' 
        target='_blank' rel='noopener noreferrer'><h6>Video Image Recorder</h6>
        <img src={pronunciation} alt=""/> </a>
            </div>
        <p>App to record images of a user saying an English language tongue twister.</p>
        <p>Made using: <ul><li>JavaScript</li>
        <li>WebRTC</li></ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/PronunciationPractice' 
        target='_blank' rel='noopener noreferrer'><h6>AmericaniZer</h6>
        <img src={americanizer} alt=""/> </a>
            </div>
        <p>Enter any sentence in UK English to have it converted to US English.</p>
        <p>Made using: <ul><li>JavaScript</li></ul>
        </p></div>
        <div className='projects-grid-item'>
            <div><a href='https://www.github.com/TomNPython/PronunciationPractice' 
        target='_blank' rel='noopener noreferrer'><h6>Productivity Heatmaps</h6>
        <img src={heatmap} alt=""/> </a>
            </div>
        <p>Multiple heatmaps detailing the work I have done day by day over the last few months. Also allows
            the user to create their own heatmap.
        </p>
        <p>Made using: <ul><li>JavaScript</li></ul>
        </p></div>
        </div>
        </div>
        </div>
    )
}

export default Projects