import React, { Component } from "react";
import mobile from "./Outdoor-mobile.png";
import desktop from "./Outdoor-desktop.png";

export default class Outdoor extends Component {
  render() {
    return (
      <div className="App-details">
        <h2 className="title-app">Get Outside: A National Park Travel App</h2>

        <div className="description-app">
          <div className="second-description-app">
            <h3>Project Notes</h3>
            <p>
              {" "}
              Users can search for their state or a state they want to travel
              to. Then, they will be provided with a description of National
              Parks in the state, the 3-day forecast in each park, and nearby
              restaurants and attractions.
              <br /> I used the National Parks API for the park information,
              Weatherbit API for the forecast, and the Foursquare API for the
              nearby attractions.
            </p>
            <section>
              <a
                href="https://github.com/tcgronk/outdoorApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
              /{" "}
              <a
                href="https://tcgronk.github.io/outdoorApp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </section>
          </div>
          <img className="mobile-app" src={mobile} alt="mobile-app" />
        </div>
        <div className="third-description-app">
          <img className="desktop-app" src={desktop} alt="desktop-app" />
          <ul>
            <h3>Tech Stack:</h3>
            <li>
              <br />
            </li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>jQuery</li>
          </ul>
        </div>
      </div>
    );
  }
}
