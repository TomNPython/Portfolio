import React from 'react';
import './Contact.css';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png'

function Contact() {
    return (
        <div id='contacts-background'>
        <div className='wrapper'>
                <h2 id='contact-title'><u>Get in Touch!</u></h2>
                <p style={{ textAlign: 'center' }}>For any freelance or contract work, please contact me through the form below and
                I will get back to you as soon as possible.</p>
                    <div class="form-style-6">
                        <form action='https://usebasin.com/f/17597fa9b9fc' method='POST'>
                            <legend>Contact:</legend>
                        <input type="text" name="field1" placeholder="Your Name" />
                        <input type="email" name="field2" placeholder="Email Address" />
                        <textarea name="field3" placeholder="Type your Message" rows='5'></textarea>
                        <input type="submit" value="Send" />
                        </form>
                    </div>
                    <div className="social">
                            <div className="divider"></div>
                            <a href="https://www.linkedin.com/in/tom-nicholson-04429089/" target='_blank' rel='noopener noreferrer'>
                                <img src={linkedin} alt="linkedin link"/></a>
                            <a href="https://github.com/TomNPython" target='_blank' rel='noopener noreferrer'>
                                <img src={github} alt="github link"/></a>
                        </div>
        </div>
        </div>
    )
}

export default Contact