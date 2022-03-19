import Button from "./Button";
import { Component } from "react";
import { Information } from "../../Styles/Containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Images, Text, ProductStyle, Icons } from "../../Styles/Elements";
import { faCashRegister, faShop } from "@fortawesome/free-solid-svg-icons";
class Product extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <>
        <ProductStyle>
          <figure>
            <Images alt={product.name} src={product.img} />
          </figure>

          <Information>
            <Text>
              <Icons>
                <FontAwesomeIcon icon={faShop} />
              </Icons>
              {product.name}
            </Text>

            <Text>
              <Icons>
                <FontAwesomeIcon icon={faCashRegister} />
              </Icons>
              {product.price}
            </Text>
          </Information>

          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </ProductStyle>
      </>
    );
  }
}
export default Product;
