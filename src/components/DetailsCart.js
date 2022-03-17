import React, { Component } from "react";
import { Details } from "../Styles/Containers";
import { ProductList, Text } from "../Styles/Elements";

class DetailsCart extends Component {
  render() {
    const { cart } = this.props;

    return (
      <>
        <Details>
          {cart.map((x) => (
            <ProductList key={x.name}>
              <figure>
                <img alt={x.name} src={x.img} width="50" height="32" />
              </figure>

              <Text>{x.name}</Text>
              <Text>{x.amount}</Text>
            </ProductList>
          ))}
        </Details>
      </>
    );
  }
}

export default DetailsCart;
