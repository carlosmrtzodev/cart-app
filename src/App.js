import React, { Component } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
class App extends Component {
  state = {
    products: [
      { name: "Tomatoes", price: 1500, img: "/products/tomatoes.png" },
      { name: "Chickpeas", price: 2500, img: "/products/chickpeas.png" },
      { name: "Lettuce", price: 500, img: "/products/lettuce.png" },
    ],

    cart: [],
    isCartVisible: false,
  };

  addToCart = (product) => {
    const { cart } = this.state;

    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name
          ? {
              ...x,
              amount: x.amount + 1,
            }
          : x
      );

      return this.setState({ cart: newCart });
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      }),
    });
  };

  showCart = () => {
    if (!this.state.cart.length) {
      return;
    }

    this.setState({ isCartVisible: !this.state.isCartVisible });
  };
  render() {
    const { isCartVisible } = this.state;

    return (
      <>
        <Navbar
          isCartVisible={isCartVisible}
          cart={this.state.cart}
          showCart={this.showCart}
        />

        <Layout>
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>
      </>
    );
  }
}

export default App;
