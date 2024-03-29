import React from "react";
import products from "../products.js";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";

function HomeScreen() {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
