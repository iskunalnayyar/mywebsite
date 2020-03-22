import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
// import Main from './components/main';
import LandingPage from './landingpage';
import Contact from './contact';
import Resume from './resume';

// holds routing for all pages
import {Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className = "demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My portfolio</Link>} scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'Orange'}} to="/">My portfolio</Link>}>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"/>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
          // <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
