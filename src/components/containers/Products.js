import React, { Component } from "react";
import Product from "../elements/Product";
import { ProductStyles } from "../../Styles/Containers";
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
