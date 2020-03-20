import React from 'react';
import LandingPage from './landingpage';
import Contact from './contact';
import Resume from './resume';

// holds routing for all pages
import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
