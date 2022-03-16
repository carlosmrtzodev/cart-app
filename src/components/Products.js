import Product from "./Product";
import React, { Component } from "react";
import { ProductStyles } from "../Styles/Styles";
class Products extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <>
        <ProductStyles>
          {products.map((product) => (
            <Product
              addToCart={addToCart}
              key={product.name}
              product={product}
            />
          ))}
        </ProductStyles>
      </>
    );
  }
}

export default Products;
