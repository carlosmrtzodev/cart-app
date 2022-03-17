import React, { Component } from "react";
import { BubbleCount } from "../Styles/Elements";

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return "";
    }
    return n > 9 ? "9+" : n;
  }
  render() {
    const { value } = this.props;

    return (
      <>
        <BubbleCount>{this.getNumber(value)}</BubbleCount>
      </>
    );
  }
}

export default BubbleAlert;
