import React from 'react';

function About() {
    return (
        <div className='wrapper'>
        <div className= 'row'>
        <img src='https://images.unsplash.com/photo-1421749810611-438cc492b581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        alt='Essex field'></img>
        <img src='https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        alt='Edinburgh Castle'></img>
        <img src='https://images.unsplash.com/photo-1525576998318-b4736ddba6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=783&q=80'
        alt='Ho Chi Minh City skyline'></img>
        </div>
        <h3><u>About</u></h3>
        <p>I am a Front End Web Developer originally from Essex, UK and currently 
            living in Ho Chi Minh City, Vietnam. 
            Since graduating from University, I have worked around the world as an 
            English Teacher and have recently moved into working in web development. 
            I am self taught, using online courses including FreeCodeCamp, Codecademy, 
            Udemy, as well as the advice and support of experienced developers. I have 
            active Github and Codepen profiles showcasing my work. Currently, I am working on 
            improving my skills with JavaScript frameworks, 
            such as ReactJS, as well as becoming more familiar with NodeJS 
            and working with APIs.</p>
        <h3><u>Education</u></h3>
        <ul><li><strong>University of Edinburgh, MA Psychology (2010 - 2014)</strong>
            <ul><li>2:1. Second Class Honours (Upper Division)</li></ul>
            </li>
            <br/>
            <li><strong>Basil Paterson College, Certificate in English Language Teaching 
                to Adults - CELTA (2014)</strong>
                </li>
                <br/>
            <li><strong>FreeCodeCamp - Various Courses (2018)</strong>
                <ul><li>Responsive Web Design (300 hrs)</li>
                <li>Front End Libraries (300 hrs)</li>
                <li>JavaScript Algorithms and Data Structures (300 hrs)</li></ul></li></ul>
        <h3><u>Employment</u></h3>
        <ul><li><strong>EMG Education</strong>, Ho Chi Minh City, Vietnam — Primary Teacher
2018 - PRESENT</li>
<li>
<strong>British Council</strong>, Barcelona, Spain — English Teacher
2017-2018</li>
<li>
<strong>ILA Vietnam</strong>, Ho Chi Minh City, Vietnam — English Teacher
2015 - 2017</li>
</ul>
        </div>
    )
}

export default About