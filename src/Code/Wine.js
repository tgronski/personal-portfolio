import React, { Component } from "react";
import mobile from './Wine-mobile.png'
import desktop from './Wine-desktop.png'

export default class Wine extends Component {
  render() {
    return (
        <div className='App-details'>
            
                        <h2 className='title-app'>Quiz App: Wine Education</h2>


            <div className='description-app'>
            <div className='second-description-app'>
            <h3>Project Notes</h3>
            <p> I have a personal
                      interest in studying the wine industry, so I created a
                      wine quiz using jQuery to test wine industry knowledge.</p>
                      <section >
                   <a
                    href="https://github.com/tcgronk/Quiz-App"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Github</a> {" "}/{" "}
                                     <a
                    href="https://tcgronk.github.io/Quiz-App/"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Demo</a></section>
            </div>
            <img className='mobile-app' src={mobile} alt='mobile-app'/>
            </div>
            <div className='third-description-app'>
            <img className='desktop-app' src={desktop} alt='desktop-app'/>
            <ul><h3>Tech Stack:</h3>
                <li><br/></li>
                <li>Javascript</li>
                <li>HTML/CSS</li>
                <li>jQuery</li>
            </ul>
            </div>
        </div>
    
    );
  }
}
