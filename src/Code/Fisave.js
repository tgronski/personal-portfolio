import React, { Component } from "react";
import mobile from './Fisave-mobile.png'
import desktop from './Fisave-desktop.png'

export default class Fisave extends Component {
  render() {
    return (
        <div className='App-details'>
            
                        <h2 className='title-app'>Fisave: a Networth Tracking App</h2>

                                <section >
                   <a
                    href="https://github.com/tcgronk/networth-client"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Github</a> <br/>
                                     <a
                    href="https://networth-client.now.sh"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Demo</a></section>
            <div className='description-app'>
            <div className='second-description-app'>
            <h3>Project Notes</h3>
            <p>As a former stock broker & finance manager, I am passionate about empowering people to manage their money with confidence.<br/><br/>This full stack project helps users track their networth
                      over time. I developed protected endpoints to handle HTTP requests from the client to prevent unauthorized access to user’s finances.</p>
            </div>
            <img className='mobile-app' src={mobile} alt='mobile-app'/>
            </div>
            <div className='third-description-app'>
            <img className='desktop-app' src={desktop} alt='desktop-app'/>
            <ul><h3>Tech Stack:</h3>
                <li><br/></li>
                <li>Javascript/React.js</li>
                <li>D3.js</li>
                <li>HTML/CSS</li>
                <li>Node.js/Express.js</li>
                <li>PostgreSQL</li>
            </ul>
            </div>
        </div>
    
    );
  }
}
