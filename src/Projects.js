import React from 'react';

function Projects() {
    return (
        <div className='wrapper'>
        <p>I have been learning web development for around one year now. During this time I have used
            several different languages and frameworks. Below are some of my projects, listed with a 
            brief description, what I used to build them, and a link to where they are hosted.
        </p>
        <div className='projects-grid-container'>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/ToDoImproved'>To Do List</a></h4>
        <p>A basic ToDo list app, with options to add and remove items.</p>
        <p>Made using: <ul><li>ReactJS</li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/IPAddressShower'>IP Address Revealer </a></h4>
        <p>Uses XHLHTTPRequests and ipinfo.io/json to show the users IP address.</p>
        <p>Made using: <ul><li>ReactJS</li>
        <li>HTTP Protocol</li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/MarkdownPreviewer'>Markdown Previewer</a></h4>
        <p>Built for FreeCodeCamps Front End Libraries projects, an app allowing the user to 
            preview any markdown text in their browser.</p>
        <p>Made using: <ul><li>ReactJS
            <li>Marked</li>
            <li>Babel</li></li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/QuoteGen'>Author Quote Generator</a></h4>
        <p>A quote generator, allowing the user to click and display a quote from a 20th Century author. Additionally, the user 
            can share the quote to Twitter.</p>
        <p>Made using: <ul><li>jQuery</li>
        <li>Babel</li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/JavaScriptCalculator'>Calculator</a></h4>
        <p>A basic calculator, allowing the user to perform basic maths.</p>
        <p>Made using: <ul><li>Pure JavaScript</li></ul>
        </p></div>
        <div className='projects-grid-item'><h4><a href='https://github.com/TomNPython/Pomodoro-Clock'>Pomodoro Clock</a></h4>
        <p>A stopwatch divided into separate work and break sections.</p>
        <p>Made using: <ul><li>ReactJS</li></ul>
        </p></div>
        </div>
        </div>
    )
}

export default Projects