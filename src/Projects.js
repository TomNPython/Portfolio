import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div id='projects-background'>
        <div className='wrapper'>
        <p className='projects-intro'>I have been learning about web development since early 2018. During this time I have used
            several different languages and frameworks. Below are some of my projects, listed with a 
            brief description, any languages or frameworks I used to build them, and a link to where they are hosted.
        </p>
        <div className='projects-grid-container'>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/Pollution-App'
        target='_blank' rel='noopener noreferrer'><p>Pollution App</p></a></h4>
        <p>Search for Air Quality Index in cities around the world. Uses the API from https://aqicn.org/api/</p>
        <p>Made using: <ul><li>ReactJS</li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/ToDoImproved' 
        target='_blank' rel='noopener noreferrer'><p>To Do List</p></a></h4>
        <p>A basic ToDo list app, with options to add and remove items.</p>
        <p>Made using: <ul><li>ReactJS</li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/IPAddressShower' 
        target='_blank' rel='noopener noreferrer'><p>IP Address Revealer</p> </a></h4>
        <p>Uses XHLHTTPRequests and ipinfo.io/json to show the users IP address.</p>
        <p>Made using: <ul><li>ReactJS</li>
        <li>HTTP Protocol</li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/MarkdownPreviewer' 
        target='_blank' rel='noopener noreferrer'><p>Markdown Previewer</p></a></h4>
        <p>Built for FreeCodeCamps Front End Libraries projects, an app allowing the user to 
            preview any markdown text in their browser.</p>
        <p>Made using: <ul><li>ReactJS
            <li>Marked</li>
            <li>Babel</li></li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/QuoteGen' 
        target='_blank' rel='noopener noreferrer'><p>Author Quote Generator</p></a></h4>
        <p>A quote generator, allowing the user to click and display a quote from a 20th Century author. Additionally, the user 
            can share the quote to Twitter.</p>
        <p>Made using: <ul><li>jQuery</li>
        <li>Babel</li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/JavaScriptCalculator' 
        target='_blank' rel='noopener noreferrer'><p>Calculator</p></a></h4>
        <p>A basic calculator, allowing the user to perform basic maths.</p>
        <p>Made using: <ul><li>Pure JavaScript</li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/Pomodoro-Clock' 
        target='_blank' rel='noopener noreferrer'><p>Pomodoro Clock</p></a></h4>
        <p>A stopwatch divided into separate work and break sections.</p>
        <p>Made using: <ul><li>ReactJS</li></ul>
        </p></div>
        </div>
        </div>
        </div>
    )
}

export default Projects