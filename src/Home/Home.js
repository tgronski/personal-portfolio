import React, { Component } from "react";
import "./Home.css";
import Main from "../Main/Main";
import About from "../About/About";
import Store from "../About/Store";
import Learn from "../Main/Learn";
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
            Hi there! My name is Tess. I'm a full stack web developer based in the Bay Area. 
            I love learning new technologies and going to tech meetups! Right now I'm learning to design data visualizations with D3.js. I also have non-tech experience in technical project management, finance, e-commerce, and leadership.
          </p>
        </section>
       <Code/>
       <About />
        {/* <Main /> */}
        {/* <Store/>
        <Learn/> */}
      </section>
    );
  }
}
