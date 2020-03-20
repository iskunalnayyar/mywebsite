import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Contact extends Component{
  render(){
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Kunal Nayyar</h2>
            <img
              src = {require('./me_nyc.png')}
              alt="avatar"
              style={{height: '400px'}}
            />
            <p style={{margin: 'auto', width: '75%', paddingTop: '1em', fontSize: '20px', textAlign: 'justify'}}>
            I am a Computer Science graduate student at Rochester Institute of Technology, Rochester, New York and will be graduating in May 2020. I am eager work as a Software Engineer.
            I have worked as a Software Engineer Intern – Machine Learning at NEC Energy Solutions. I got the opportunity to work with vast amounts of data and perform intensive data analysis on a domain I had to learn a lot about at the time. The most notable challenge I faced at NEC was the Remaining Useful Life (RUL) prediction of Home Energy Storage Solutions (HESS) much like the Tesla power wall systems, wherein the objective was to predict when the battery would reach 50% of its original capacity. The final model I developed showcases a prediction accuracy of 98.48%.
            </p>
            <p style={{margin: 'auto', width: '75%', paddingTop: '1em', fontSize: '20px', textAlign: 'justify'}}>

            I have also worked as a Research Assistant in the College of Mathematical Science at RIT, where I implemented various Machine Learning algorithms to be tested in a large-scale setup. I had developed (from scratch) different loss functions and used them to correct & improve predictor functions to get better models.
            I love solving coding challenges with my logical, analytical and technical aptitude as is evident from my work and academic experiences. Java & Python are two of my strongest languages and I enjoy using my time to work and improve on my Software Development & Machine learning skills. Currently working on my full-stack skills & pursuing the full-stack certification from LinkedIn learning.
            I’ve worked on projects in the topics of: Algorithms and Data Structures, Web Services, Intelligent Systems and Big Data. I am well versed with object-oriented programming for software development as well as web development. I have experience implementing complete data-driven pipelines to gain informational insights from raw data and visualizing how the insights can improve business decisions. I am also familiar with SQL, and NoSQL database MongoDB.
            Please see the accompanying resume for details of my experience and education.
            </p>
          </Cell>

        </Grid>

      </div>
    )
  }
}

export default Contact;
