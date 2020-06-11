import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import "../App/App.css";
import MediaQuery from "react-responsive";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLead: false,
      showDropDown: false
    };
  }
  // handleLead = () => {
  //   this.setState({ showLead: true });
  // };
  // handleUnhover = () => {
  //   this.setState({ showLead: false });
  // };
  // handleDropDown = () => {
  //   if (this.state.showDropDown === false) {
  //     this.setState({ showDropDown: true });
  //   } else this.setState({ showDropDown: false });
  // };
  // handleUnDrop = () => {
  //   this.setState({ showDropDown: false });
  // };


  render() {
    return (
      
            <span className="background-color">
              <nav role="banner">
                <span className="mainNav">
                  <ul className="navMenu">
                    <li>
                      <Link to="/home" className="a">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/leadership"
                        className="a"
                      >
                        Writing Samples
                      </Link>
                    </li>
                  </ul>
                </span>
              </nav>
            </span>
          
    );
  }
}
