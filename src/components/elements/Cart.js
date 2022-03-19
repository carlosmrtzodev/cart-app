import BubbleAlert from "./BubbleAlert";
import DetailsCart from "./DetailsCart";
import React, { Component } from "react";
import { Relative } from "../../Styles/Containers";
import { BubbleCart, Buttons } from "../../Styles/Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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

          <Buttons onClick={showCart}>
            Shopping Cart <FontAwesomeIcon icon={faCartShopping} />
          </Buttons>

          {isCartVisible ? <DetailsCart cart={cart} /> : null}
        </Relative>
      </>
    );
  }
}
export default Cart;
