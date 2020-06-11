import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Main from "../Main/Main";
import About from "../About/About";
import Store from "../About/Store";
import Learn from "../Main/Learn";

export default class Home extends Component {
  render() {
    return (
      <section className="page">
        <section className="homePage">
          <p className="bio">
            Hi there! My name is Tess. I am a web developer based in the Bay Area. I graduated from Bloc/Thinkful's Full Stack Coding Bootcamp in May 2020. 
          </p>
        </section>
       
        <Main />
        <About />
        <Store/>
        <Learn/>
      </section>
    );
  }
}
