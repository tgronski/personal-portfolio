import React, { Component } from "react";
import { Link } from 'react-router-dom';
import quizapp from "./wine-icon.png";
import "./Code.css";
import ParkApp from "./travel-icon.png";
import noteful from "./note-icon.png";
import fisave from "./fisave.png";
import sustainability from "./monstrera.png";
import $ from "jquery";
import Fisave from "./Fisave";
import ShopSustainably from "./ShopSustainably";
import Wine from './Wine'
import Notes from './Notes'
import Outdoor from "./Outdoor";

export default class Code extends Component {

  handleAll=()=>{
    $("#0").removeClass('hidden');
    $("#1").removeClass('hidden');
    $("#2").removeClass('hidden');
    $("#3").removeClass('hidden');
    $("#4").removeClass('hidden');

  }
  handleFullStack=()=>{
    $("#0").removeClass('hidden');
    $("#1").removeClass('hidden');
    $("#2").removeClass('hidden');
    $("#3").removeClass('hidden');
    $("#4").removeClass('hidden');
    $('#1').addClass("hidden");
    $('#0').addClass("hidden");
  }
  handleD3=()=>{
    $("#0").removeClass('hidden');
    $("#1").removeClass('hidden');
    $("#2").removeClass('hidden');
    $("#3").removeClass('hidden');
    $("#4").removeClass('hidden');
    $('#1').addClass("hidden");
    $('#0').addClass("hidden");
    $('#2').addClass("hidden");
    $('#3').addClass("hidden");
  }
  handleJQuery=()=>{
   
    $("#0").removeClass('hidden');
    $("#1").removeClass('hidden');
    $("#2").removeClass('hidden');
    $("#3").removeClass('hidden');
    $("#4").removeClass('hidden');
    $('#2').addClass("hidden");
    $('#3').addClass("hidden");
    $('#4').addClass("hidden");
  }
  render() {
    return (

              <section className="projects">
                <span className='Home-title'>
                <h2>Check out my Projects!</h2>
                <span className="Home-nav">
                <button className="Home-button" onClick={()=>this.handleAll()}>All</button>
                <button className="Home-button" onClick={()=>this.handleFullStack()}>Full Stack</button>
                <button className="Home-button" onClick={()=>this.handleD3()}>D3.js</button>
                <button className="Home-button" onClick={()=>this.handleJQuery()}>jQuery</button>
                
                </span>
                <br/>
                </span>
                <section className='Home-project' id='4'>
                    <section>
                      <Fisave/>
                    {/* <Link to='/fisave'>
                    <img
                      src={fisave}
                      className="networthphoto"
                      alt="networth-app"
                    />
                    </Link>
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
                      over time. I developed protected endpoints to handle HTTP requests from the client to prevent unauthorized access to user’s finances.<br /> The PostgreSQL data is stored on
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
                  </section> */}
                  </section>
                </section>
                <section className='Home-project'className='App-background' id='3'>
                  
                <section>
                  <ShopSustainably/>
                {/* <Link to='/shopsustainably'>
                    <img
                      src={sustainability}
                      className="sustainablephoto"
                      alt="sustainable-app"
                    />
                  </Link>
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
                  <section className="description" >
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
                    </span> */}
                  </section>
                </section>
               
                <section className='Home-project' id='2'>
                  <section>
<Notes/>
                {/* <section>

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
                  </section> */}
                  {/* <section className="description">
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
                    </span> */}
                  {/* </section> */}
                </section>
                </section>
                <section className='Home-project' className='App-background' id='1'>
                <section>
                  <Outdoor/>
                    {/* <img src={ParkApp} className="parkphoto" alt="quiz-app" />
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
                  </section> */}
                </section>
                </section>
                <section className='Home-project' id='0'>
                <section >
                  <Wine/>
                    {/* <img src={quizapp} className="winephoto" alt="quiz-app" />
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
                    </span> */}
                  </section>
                </section>
              </section>

    );
  }
}
