import React, { Component } from "react";
import "./Home.css";
import About from "../About/About";
import Bio from "../CodingJourney/Bio.png"
import Code from "../Code/Code";

export default class Home extends Component {
  render() {
    return (
      <section className="page">
        <span className="intro">
        <img id='bitmoji' src={Bio} alt="bitmoji" />
        </span>
        <section className="homePage">
          <p className="bio">
            Hi there!  My name is Tess. I'm a full stack web developer based in the Bay Area. <br/><br/>
            I love learning new technologies and going to tech meetups! Right now I'm learning to design data visualizations with D3.js. I also have experience in technical project management, finance, e-commerce, and leadership.
          </p>
        </section>
       <Code/>
       <About />
      </section>
    );
  }
}
