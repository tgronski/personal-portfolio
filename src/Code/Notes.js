import React, { Component } from "react";
import mobile from './Notes-mobile.png'
import desktop from './Notes-desktop.png'

export default class Notes extends Component {
  render() {
    return (
        <div className='App-details'>
            
                        <h2 className='title-app'>Notes: A Note Taking App</h2>


            <div className='description-app'>
            <div className='second-description-app'>
            <h3>Project Notes</h3>
            <p>      Users can
                      add new folders and notes to the notetaking app. They can
                      also delete old notes.</p>
                      <section >
                   <a
                    href="https://github.com/tcgronk/Noteful-App"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Github</a> {" "}/{" "}
                                     <a
                    href="https://noteful-app-pi-seven.now.sh"
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
                <li>Javascript/React.js</li>
                <li>HTML/CSS</li>
                <li>Node.js/Express.js</li>
                <li>PostgreSQL</li>
            </ul>
            </div>
        </div>
    
    );
  }
}
