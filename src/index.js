import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import Nav from './Nav';
import Container from './Container';

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Nav />
            <Container />
        </div>
    </BrowserRouter>
);

render(<App />, document.getElementById('root'));