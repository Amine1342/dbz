import React, { Component } from "react";
import broly from "./Images/Broly2.png";

class Broly extends Component {
  state = {
    bg: "",
  };

  handleClick = () => {
    this.setState({
      bg: "bg-danger",
    });
  };
  render() {
    return (
      <div className={`col ${this.state.bg}`}>
        <img
          onClick={this.handleClick}
          src={broly}
          alt="Broly"
          className="img-fluid"
        />
        <br />
      </div>
    );
  }
}

export default Broly;
