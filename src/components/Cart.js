import BubbleAlert from "./BubbleAlert";
import DetailsCart from "./DetailsCart";
import React, { Component } from "react";
import { BubbleCart, Buttons, Relative } from "../Styles/Styles";

class Cart extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props;
    const amount = cart.reduce((acc, el) => acc + el.amount, 0);

    return (
      <>
        <Relative>
          <BubbleCart>
            {amount !== 0 ? <BubbleAlert value={amount} /> : null}
          </BubbleCart>

          <Buttons onClick={showCart}>Shopping Cart</Buttons>

          {isCartVisible ? <DetailsCart cart={cart} /> : null}
        </Relative>
      </>
    );
  }
}

export default Cart;
