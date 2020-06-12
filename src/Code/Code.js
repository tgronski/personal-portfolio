import React, { Component } from "react";
import quizapp from "./wine-icon.png";
import "./Code.css";
import ParkApp from "./travel-icon.png";
import noteful from "./note-icon.png";
import fisave from "./fisave.png";
import MediaQuery from "react-responsive";
import sustainability from "./monstrera.png";

export default class Code extends Component {

  render() {
    return (

              <section className="projects">
                <span className='Home-title'>
                <h2>Check out my Projects!</h2>

                {/* <h4>Javascript | React.js | D3.js | jQuery | Node.js | Express.js | PostgreSQL</h4>  */}
                </span>
                <section className='Home-project'>
                    <section>
                    <img
                      src={fisave}
                      className="networthphoto"
                      alt="networth-app"
                    />
                    <section className='Home-links'>
                   <a
                    href="https://github.com/tcgronk/networth-client"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Github</a> <br/>
                                     <a
                    href="https://networth-client.now.sh"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Demo</a></section></section>
                  <section className="description">
                    <b className="title">Fisave</b>

                    <span className="project-detail">
                        <br/>
                      As a former stock broker & finance manager, I am passionate about empowering people to manage their money with confidence. This full stack project helps users track their networth
                      over time <br /> <br /> The PostgreSQL data is stored on
                      Heroku, and the app is deployed using Zeit.
                      <ul className="projectList">
                      <h3> Technologies Used:</h3>
                        <li>D3 for data visualizations</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                      </ul>
                      <section className='Home-small-links'>
                   <a
                    href="https://github.com/tcgronk/networth-client"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Github</a> {" "}/{" "}
                                     <a
                    href="https://networth-client.now.sh"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Demo</a></section>
                    </span>
                  </section>
                </section>
                <section className='Home-project'>
                  
                <section>
                    <img
                      src={sustainability}
                      className="sustainablephoto"
                      alt="sustainable-app"
                    />
                    <section className='Home-links'>
                    <a
                    href="https://github.com/tcgronk/sustainability"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Github</a><br/>
                  <a
 href="https://sustainability.now.sh"
 target="_blank"
 rel="noopener noreferrer" 
>Demo</a></section>
                    </section>
                  <section className="description">
                    <b className="title">Eco-Database</b>
                    <br/>
                    <span className="project-detail">
                      This full stack project helps users find sustainable
                      stores in a variety of categories. <br /> <br /> The
                      PostgreSQL data is stored on Heroku, and the app is
                      deployed using Zeit.
                      <ul className="projectList">
                        <h3>Technologies Used:</h3>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                      </ul>
                      <section className='Home-small-links'>
                    <a
                    href="https://github.com/tcgronk/sustainability"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Github</a>{" "}/{" "}
                  <a
 href="https://sustainability.now.sh"
 target="_blank"
 rel="noopener noreferrer" 
>Demo</a></section>
                    </span>
                  </section>
                </section>
                <section className='Home-project'>

                <section>
                    <img src={noteful} className="notephoto" alt="note-app" />
                    <section className='Home-links'>

                    <a
                    href="https://github.com/tcgronk/Noteful-App"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Github
                  </a><br/>
                  <a
                    href="https://noteful-app-pi-seven.now.sh"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Demo
                  </a>
                  </section>
                  </section>
                  <section className="description">
                    <b className="title">Note Taking</b>
                    <br/>
                    <span className="project-detail">
                      Users can
                      add new folders and notes to the notetaking app. They can
                      also delete old notes.{" "}
                      <ul className="projectList">
                        <h3>Technologies Used:</h3>
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                        <li>React</li>
                        <li>Express server</li>
                        <li>Heroku</li>
                      </ul>
                      <section className='Home-small-links'>

<a
href="https://github.com/tcgronk/Noteful-App"
target="_blank"
rel="noopener noreferrer" 
>Github
</a>{" "}/{" "}
<a
href="https://noteful-app-pi-seven.now.sh"
target="_blank"
rel="noopener noreferrer" 
>Demo
</a>
</section>
                    </span>
                  </section>
                </section>
                <section className='Home-project'>
                <section>
                    <img src={ParkApp} className="parkphoto" alt="quiz-app" />
                    <section className='Home-links'>
                    <a
                    target="_blank"
                    href="https://github.com/tcgronk/outdoorApp"
                    rel="noopener noreferrer" 
                  >Github
                  </a><br/>
                  <a
                    target="_blank"
                    href="https://tcgronk.github.io/outdoorApp/"
                    rel="noopener noreferrer" 
                  >Demo
                  </a>
                  </section>
                  </section>
                  <section className="description">
                    <b className="title">External API</b>
                    <br/>
                    <span className="project-detail">
                       Users can search for their state or a state
                      they want to travel to. Then, they will be provided with a
                      description of National Parks in the state, the 3-day
                      forecast in each park, and nearby restaurants and
                      attractions. I used the National Parks API for the park
                      information, Weatherbit API for the forecast, and the
                      Foursquare API for the nearby attractions.{" "}
                      <ul className="projectList">
                        <h3>Technologies Used:</h3>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>HTML/CSS</li>
                      </ul>
                      <section className='Home-small-links'>

                      <a
                    target="_blank"
                    href="https://github.com/tcgronk/outdoorApp"
                    rel="noopener noreferrer" 
                  >Github
                  </a>{" "}/{" "}
                  <a
                    target="_blank"
                    href="https://tcgronk.github.io/outdoorApp/"
                    rel="noopener noreferrer" 
                  >Demo
                  </a>
                  </section>
                    </span>
                  </section>
                </section>
                <section className='Home-project'>
                <section >
                    <img src={quizapp} className="winephoto" alt="quiz-app" />
                    <section className='Home-links'>

                    <a href="https://github.com/tcgronk/Quiz-App" target="_blank" rel="noopener noreferrer" >

                  Github</a><br/>
                  <a href="https://tcgronk.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer" >

Demo</a>
</section>
</section>

                  <section className="description">
                    <b className="title">Quiz App</b>
                    <br/>
                    <span className="project-detail">
                     I have a personal
                      interest in studying the wine industry, so I created a
                      wine quiz to test wine industry knowledge.
                      <ul className="projectList">
                        <h3>Technologies Used:</h3>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>HTML/CSS</li>
                      </ul>
                      <section className='Home-small-links'>

<a href="https://github.com/tcgronk/Quiz-App" target="_blank" rel="noopener noreferrer" >

Github</a>{" "}/{" "}
<a href="https://tcgronk.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer" >

Demo</a>
</section>
                    </span>
                  </section>
                </section>
              </section>

    );
  }
}
