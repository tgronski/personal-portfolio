import React, { Component } from "react";
import mobile from './Fisave-mobile.png'
import desktop from './Fisave-desktop.png'

export default class Fisave extends Component {
  render() {
    return (
        <div className='App-details'>
            <img className='desktop-app' src={desktop} alt='desktop-app'/>
            
            <img className='mobile-app' src={mobile} alt='mobile-app'/>

        </div>
    
    );
  }
}
