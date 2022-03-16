import React, { Component } from "react";
import { Buttons } from "../Styles/Styles";
class Button extends Component {
  render() {
    return (
      <>
        <Buttons {...this.props} />
      </>
    );
  }
}

export default Button;
