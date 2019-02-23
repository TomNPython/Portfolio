import React from 'react';
import './About.css';

function About() {
    return (
        <div id='about-background'>
        <div className='wrapper'>
        <div className= 'grid-container'>
        <div className='grid-item info'>
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
            </div>
            <div className='grid-item past'>
            <h3><u>Languages/Skills</u></h3>
            <div class='skills'>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-css3-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-jquery-plain"></i>
            <i class="devicon-bootstrap-plain"></i>
            <i class="devicon-github-plain"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-mongodb-plain"></i>
            <i class="devicon-wordpress-plain"></i>
            </div>
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
            <br/>
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
        </div>
        </div>
        </div>
    )
}

export default About