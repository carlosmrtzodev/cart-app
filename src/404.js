import { Link } from "react-router-dom";
import React, { Component } from "react";
import Layout from "./components/Layout";
import { Error } from "./Styles/Elements";
import { Buttons, Text } from "./Styles/Elements";
class NotFound extends Component {
  render() {
    return (
      <>
        <Layout>
          <Error>
            <Text>404: This page could not be found</Text>

            <Link to="/">
              <Buttons>Go Back</Buttons>
            </Link>
          </Error>
        </Layout>
      </>
    );
  }
}

export default NotFound;
