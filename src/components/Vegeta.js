import React, { Component } from "react";
import vegeta from "./Images/Vegeta2.png";

class Vegeta extends Component {
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
          src={vegeta}
          alt="Vegeta"
          className="img-fluid"
          style={{ height: "250px" }}
        />
        <br />
      </div>
    );
  }
}

export default Vegeta;
