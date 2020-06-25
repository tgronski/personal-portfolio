import React, { Component } from "react";
import mobile from './ShopSustainably-mobile.png'
import desktop from './Sustainable-desktop.png'

export default class ShopSustainably extends Component {
  render() {
    return (
        <div className='App-details'>
            
                        <h2 className='title-app'>Shop Sustainably: A Database of Sustainable Stores</h2>

                                <section >
                   <a
                    href="https://github.com/tcgronk/sustainability"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Github</a> <br/>
                                     <a
                    href="https://sustainability.now.sh"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >Demo</a></section>
            <div className='description-app'>
            <div className='second-description-app'>
            <h3>Project Notes</h3>
            <p>      There are so many ways to shop more sustainably, but sometimes it can be hard to find the right resources. This full stack project helps users find sustainable
                      stores in a variety of categories all in one database. <br /> <br /> The
                      PostgreSQL data is stored on Heroku, and the app is
                      deployed using Zeit.</p>
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
