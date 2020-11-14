import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Rochester Institute of Technology <span>August 2017-May 2020</span></h2>
                        <li>
                        I graduated from Rochester Institute of Technology on May 8th 2020. I have an Advanced diploma in Big Data Analytics.</li>
                        <li>
                        I have taken the following courses during my Master's :  Neural Network & Machine Learning, Big Data Analytics, Web Services, Intelligent Systems, Computer Networks, Computational Problem Solving, Algorithms, Object Oriented Programing</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full-Stack Engineer at Securely Yours <span>August 2020 - Present</span></h2>
                        <ul>
                          <li>
                          Currently developing a SaaS solution that features an employee wellness dashboard to be displayed in an interactive website using dynamic data visualization techniques.
                          </li>
                          <li>
                          Leading the designing, product development & planning efforts.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Co-op at NEC Energy Solutions <span>August 2019 - January 2020</span></h2>
                        <ul>
                          <li>
                          Implemented a predictive machine learning pipeline for improving battery’s warranty model.
                          </li>
                          <li>
                          Used Python frameworks & libraries to build the application using Agile methodologies & version control.
                          </li>
                          <li>
                          Performed all phases of machine learning based data analysis for predicting remaining battery capacities of home energy storage solutions, using LSTM Neural Network.
                          </li>
                          <li>
                          Achieved a prediction accuracy of 98.48% from the final model to predict when battery storage devices would reach 50% of their original capacity.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Assistant at Rochester Institute of Technology <span>April 2019 - August 2020</span></h2>
                        <ul>
                          <li>
                          Applied SVM, custom loss functions, & optimization techniques on a research dataset.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at DigiStreet <span>Jul 2015 - April 2016</span></h2>
                        <ul>
                          <li>
                          Worked as a full-stack developer for building internal tools to help with data management & customer project tracking.
                          </li>
                          <li>
                          Designed database schema & built website for allowing users to access company database.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>University of Mumbai <span>August 2011 - April 2015</span></h2>
                        <li>
                        I have completed my under graduation in Computer Science from University of Mumbai.</li>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
