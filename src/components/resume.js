import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
  render(){
    const list =
    <ul>
      <li>Built a machine learning infrastructure – Data Collection, Feature Extraction, Data Verification and Modeling.</li>
      <li>Applied all phases of Data Analysis including data cleaning and dimensionality reduction.</li>
      <li>Predicted Remaining Useful Life of Home Energy Storage Solution battery capacities using LSTM Neural Network.</li>
      <li>Developed a Neural Network loop that utilizes Genetic Algorithm to perform Feature Selection.</li>
      <li>Performed Clustering to find data anomalies and find common themes among failing devices.</li>
    </ul>
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require('./resume_img.png')}
                alt="avatar-resume"
                style={{height: '200px'}}
              />
            </div>
            <div className="resume-left-col" style={{display: 'flex flex-align', padding:'100px'}}>
              <h2 style={{paddingTop: '2em'}}> Kunal Nayyar </h2>
              <h4 style={{color: 'grey'}}>Programmer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
              <p> This is where something catchy goes </p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
              <h5> Address </h5>
              <p> 144 Crittenden way, Rochester, NY, 14623 </p>
              <h5> Phone </h5>
              <p> (585) | 309 | 7815 </p>
              <h5> Email </h5>
              <p> iskunalnayyar AT gmail.com </p>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2> Education </h2>
            <Education
              startYear={"August 2017"}
              endYear={"May 2020"}
              schoolName="Rochester Institute of Technology"
              schoolDescription="Pursuing Master's in Computer Science. Graduating May 2020"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2> Experience </h2>

            <Experience
              startYear={"August 2019"}
              endYear={"January 2020"}
              jobName={"Software Engineer Intern - Machine Learning"}
              jobDescription={list} />
            <Experience
              startYear={"April 2019"}
              endYear={"August 2019"}
              jobName={"Research Assistant"}
              jobDescription={"Worked on a Data Mining project in Big Data. Applied SVM, custom loss functions, and optimization techniques."}
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2> Skills </h2>
            <Skills
              skill='JavaScript'
              progress={50}
            />
            <Skills
              skill='Java'
              progress={90}
            />
            <Skills
              skill='Python'
              progress={90}
            />
            <Skills
              skill='React'
              progress={25}
            />
            <Skills
              skill='NodeJS'
              progress={25}
            />
            <Skills
              skill='HTML/CSS'
              progress={75}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
