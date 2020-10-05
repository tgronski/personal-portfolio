import React from "react";
import PersonalBrand from "./logo copy.png";

class Store extends React.Component {
  render() {
    return (
      <section className="Store">
        <br />
        <br />
        <img
          src={PersonalBrand}
          className="personal-logo"
          alt="personal-logo"
        />
        <span className="Store-description">
          I am super passionate about empowering women, especially in their
          careers. Thats why I started a clothing boutique that sells work
          clothing for young professional women.
        </span>
      </section>
    );
  }
}
export default Store;
