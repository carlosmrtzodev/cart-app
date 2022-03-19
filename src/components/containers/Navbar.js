import Logo from "../elements/Logo";
import Cart from "../elements/Cart";
import React, { Component } from "react";
import { ContainerNavBar, NavBar } from "../../Styles/Containers";
class Navbar extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props;

    return (
      <>
        <NavBar>
          <ContainerNavBar>
            <Logo />

            <Cart
              cart={cart}
              isCartVisible={isCartVisible}
              showCart={showCart}
            />
          </ContainerNavBar>
        </NavBar>
      </>
    );
  }
}
export default Navbar;
