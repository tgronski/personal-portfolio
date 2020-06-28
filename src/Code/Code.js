import React, { Component } from "react";
import "./Code.css";
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
                  </section>
                </section>
                <section className='Home-project'className='App-background' id='3'>
                  
                <section>
                  <ShopSustainably/>

                  </section>
                </section>
               
                <section className='Home-project' id='2'>
                  <section>
<Notes/>
              
                </section>
                </section>
                <section className='Home-project' className='App-background' id='1'>
                <section>
                  <Outdoor/>
                   
                </section>
                </section>
                <section className='Home-project' id='0'>
                <section >
                  <Wine/>
                 
                  </section>
                </section>
              </section>

    );
  }
}
