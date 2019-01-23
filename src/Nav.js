import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
    return (
        <div id='nav'>
        <ul id='nav-links'>
            <li>
                <NavLink exact to='/' style={{ textDecoration: 'none'}}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/About' style={{ textDecoration: 'none'}}>About</NavLink>
            </li>
            <li>
                <NavLink to='/Projects' style={{ textDecoration: 'none'}}>Projects</NavLink>
            </li>
            <li>
                <NavLink to='/Contact' style={{ textDecoration: 'none'}}>Contact</NavLink>
            </li>
        </ul>
        </div>
    )
};

export default Nav