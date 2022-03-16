import React, { Component } from "react";
import { Details, ProductList } from "../Styles/Styles";

class DetailsCart extends Component {
  render() {
    const { cart } = this.props;

    return (
      <>
        <Details>
          <ul>
            {cart.map((x) => (
              <ProductList key={x.name}>
                <img alt={x.name} src={x.img} width="50" height="32" />
                <p>{x.name}</p>
                <p>{x.amount}</p>
              </ProductList>
            ))}
          </ul>
        </Details>
      </>
    );
  }
}

export default DetailsCart;
