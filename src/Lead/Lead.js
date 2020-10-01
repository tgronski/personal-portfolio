import React, { Component } from "react";
import "./Lead.css";
import leadership from "./leadership.jpg";
import hacktoberfest from "./hacktoberfest.jpg";
import computersmall from "./computersmall.jpg";
import animations from "./animations.jpg";
import { Link } from "react-router-dom";
import Img from "react-image";

export default class Lead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: false,
    };
  }
  componentDidMount() {
    this._mounted = true;

    if (this.state.image === false && this._mounted) {
      setTimeout(() => this.setState({ image: true }), 1200);
    }
  }
  componentWillUnmount() {
    this._mounted = false;

    clearTimeout();
  }

  render() {
    return (
      <section className="leadPage">
        <span className="contain">
          <section className="articles">
            <Link to="/leadership/4">
              <b>2 Minute Intro to GreenSock Animations</b>
            </Link>
            <br />
            <p>Sept 29, 2020 || 2 min Read</p>
            {this.state.image ? (
              <Img
                src={animations}
                className="photo"
                alt="desktop"
                loader={<p className="articleImgLoader"></p>}
              ></Img>
            ) : (
              <p className="articleImgLoader"></p>
            )}
          </section>
          <br />
          <section className="articles">
            <Link to="/leadership/3">
              <b>Beginners Guide to Hacktoberfest</b>
            </Link>
            <br />
            <p>Sept 27, 2020 || 5 min Read</p>
            {this.state.image ? (
              <Img
                src={hacktoberfest}
                className="photo"
                alt="desktop"
                loader={<p className="articleImgLoader"></p>}
              ></Img>
            ) : (
              <p className="articleImgLoader"></p>
            )}
          </section>
          <br />
          <section className="articles">
            <Link to="/leadership/1">
              <b>An Actionable Guide to Managing Introverts</b>
            </Link>
            <br />
            <p>Aug 18, 2019 || 3 min Read</p>
            {this.state.image ? (
              <Img
                src={leadership}
                className="photo"
                alt="desktop"
                loader={<p className="articleImgLoader"></p>}
              ></Img>
            ) : (
              <p className="articleImgLoader"></p>
            )}
          </section>
          <section className="articles">
            <br />
            <Link to="/leadership/2">
              <b>A Running List of Newbie Resources</b>
              <br />
            </Link>
            <p>Nov 3, 2019 || 3 min Read</p>

            {this.state.image ? (
              <Img
                src={computersmall}
                className="photo"
                alt="computerdesk"
                loader={<p className="articleImgLoader"></p>}
              ></Img>
            ) : (
              <p className="articleImgLoader"></p>
            )}
          </section>
        </span>
      </section>
    );
  }
}
