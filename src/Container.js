import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {TransitionGroup, CSSTransition } from 'react-transition-group'
import './Container.css';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Container({ location }) {
    return(
        <div className='wrapper'>
            <TransitionGroup className='transition-group'>
                <CSSTransition
                key={location.key}
                timeout={{ enter: 250, exit: 250 }}
                classNames='fade'>
                    <section className='route-section'>
                    <Switch location={location}>
                        <Route exact path='/' component={Home} />
                        <Route path='/About' component={About} />
                        <Route path='/Projects' component={Projects} />
                        <Route path='/Contact' component={Contact} />
                        </Switch>
                        </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
};

export default withRouter(Container);