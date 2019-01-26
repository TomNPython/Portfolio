import React from 'react';

function Contact() {
    return (
        <div className='wrapper'>
                <h2 id='contact-title'><u>Get in Touch!</u></h2>
                <p style={{ textAlign: 'center' }}>For any freelance or contract work, please contact me through the following sites.</p>
        <div className='contact-flex-container'>
        <h2 className='contact-flex-item'><a href='https://www.linkedin.com/in/tom-nicholson-04429089/' 
        target="_blank" rel="noopener noreferrer">LinkedIn<br/>
        <img src='https://image.flaticon.com/icons/svg/124/124011.svg' alt='LinkedIn'></img></a></h2>
        <h2 className='contact-flex-item'><a href='https://github.com/TomNPython' 
        target="_blank" rel="noopener noreferrer">Github<br/>
        <img src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='Github'></img></a>
        </h2>
        <h2 className='contact-flex-item'><a href='https://codepen.io/tomnpython' 
        target="_blank" rel="noopener noreferrer">Codepen<br/>
        <img src='https://image.flaticon.com/icons/svg/785/785252.svg' alt='Codepen'></img></a>
        </h2>
        <h2 className='contact-flex-item'><a href='https://www.instagram.com/tom.nich/?hl=en' 
        target="_blank" rel="noopener noreferrer">Instagram<br/>
        <img src='https://image.flaticon.com/icons/svg/174/174855.svg' alt='Instagram'></img></a>
        </h2>
        </div>
        </div>
    )
}

export default Contact