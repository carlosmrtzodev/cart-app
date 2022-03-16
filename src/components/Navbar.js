import Logo from "./Logo";
import Cart from "./Cart";
import React, { Component } from "react";
import { ContainerFlex, NavBar } from "../Styles/Styles";
class Navbar extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props;

    return (
      <>
        <NavBar>
          <ContainerFlex>
            <Logo />
            <Cart
              cart={cart}
              isCartVisible={isCartVisible}
              showCart={showCart}
            />
          </ContainerFlex>
        </NavBar>
      </>
    );
  }
}

export default Navbar;
