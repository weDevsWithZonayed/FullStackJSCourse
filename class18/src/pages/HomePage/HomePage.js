import React from "react";

import { Container } from "../../components/common";

import ProductList from "../../components/ProductList/ProductList";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Container>
      <div className="homepage">
        <h2>Welcome to the Cartoon Store!</h2>
        <ProductList />
      </div>
    </Container>
  );
};

export default HomePage;
