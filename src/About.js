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
            I am keen to improve my skills and have active <a className='about-links' href='https://github.io/TomNPython'>Github</a>
            , <a class='about-links' href='https://codepen.io/tomnpython'>Codepen</a>, 
            <a class='about-links' href='https://www.hackerrank.com/tom_nicholson101'> HackerRank </a>
            and <a class='about-links' href='https://www.codewars.com/users/TomNPython'>Codewars</a> profiles on which I aim to display 
            the best of my abilities.</p>
            <button className='resume-link'>
                <a href='ThomasNicholson_CV.pdf' download><i class='fa fa-download fa-sm' aria-hidden="true" ></i>Download CV</a>
            </button>
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
        </div>
        </div>
        </div>
    )
}

export default About