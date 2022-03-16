import Button from "./Button";
import { Component } from "react";
import { FlexContent, Images, ProductStyle, Text } from "../Styles/Styles";
class Product extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <>
        <ProductStyle>
          <Images alt={product.name} src={product.img} />

          <FlexContent>
            <Text>{product.name}</Text>
            <Text>${product.price} USD</Text>
          </FlexContent>

          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </ProductStyle>
      </>
    );
  }
}

export default Product;
