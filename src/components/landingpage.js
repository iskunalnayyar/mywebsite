import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
  render(){
    return (
      <div style={{width: '100%', margin:'auto'}}>
      <Grid className='landing-grid'>
        <Cell col={12}>
          <img
          src={require('./myimage.png')}
          alt="avatar"
          className="avatar-img"
          />
          <div className='banner-text'>
            <h1> Software Engineer </h1>
            <hr />
            <p> Java | Python | JavaScript | React | NodeJS | SQL | HTML/CSS </p>
            <div className="social-links">
              {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/kunalvnayyar" rel="noopener noreferrer" target="_blank" className="padding: 1em;">
                <i className="fab fa-linkedin" aria-hidden='true'></i>
              </a>
              {/* Github */}
              <a href="https://www.github.com/iskunalnayyar" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github" aria-hidden='true'></i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Landing;
