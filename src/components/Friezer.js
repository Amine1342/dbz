import React, { Component } from "react";
import Freezer from "./Images/Freezer2.png";

class Friezer extends Component {
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
          src={Freezer}
          alt="Freezer"
          className="img-fluid"
          style={{ height: "250px" }}
        />
        <br />
      </div>
    );
  }
}

export default Friezer;
