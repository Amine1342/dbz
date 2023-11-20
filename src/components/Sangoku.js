import React, { Component } from "react";
import Goku from "./Images/Goku2.png";

class Sangoku extends Component {
  state = {
    bg: "",
  };

  handleClick = () => {
    this.setState({
      bg: "bg-success",
    });
  };

  render() {
    return (
      <div className={`col ${this.state.bg}`}>
        <img
          onClick={this.handleClick}
          src={Goku}
          alt="Sangoku"
          className="img-fluid"
          style={{ height: "250px" }}
        />
        <br />
      </div>
    );
  }
}

export default Sangoku;
