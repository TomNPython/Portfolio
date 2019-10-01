import React from 'react';
import './About.css';

function About() {
    return (
        <div id='about-background'>
        <div className='wrapper'>
        <div className= 'grid-container'>
        <div className='grid-item info'>
        <h3>About</h3>
        <p class='about-me'>I am a Web Developer originally from the UK and currently 
            living in Vietnam. 
            Since graduating from University, I have worked around the world as an 
            English Teacher and have now moved into web development. 
            I have experience working alone on personal projects, as well as with experienced developers 
            on large scale group tasks. 
            I am keen to improve my skills and have an active Github profile on which I aim to display 
            the best of my abilities.</p>
            </div>
            <div className='grid-item past'>
            <h3>Languages/Skills</h3>
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
            </div>
            <div class='grid-item'>
        <h3>Education</h3>
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
        <h3>Employment</h3>
        <ul>
            <li><strong>One on One English</strong>, Ho Chi Minh City, Vietnam - QA Lead Tester + Curriculum Designer 2019</li>
            <li><strong>EMG Education</strong>, Ho Chi Minh City, Vietnam — Primary Teacher
2018 - 2019</li>
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