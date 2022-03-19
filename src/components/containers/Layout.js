import React, { Component } from "react";
import { Container, LayoutContent } from "../../Styles/Containers";
class Layout extends Component {
  render() {
    return (
      <>
        <LayoutContent>
          <Container>{this.props.children}</Container>
        </LayoutContent>
      </>
    );
  }
}
export default Layout;
