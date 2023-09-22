import React from "react";
import "./Page.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductDesc = () => {
  return (
    <Container>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        //viewport is used to temper with the view of the element in other words edit what to do when th element is viewed 50% 100% etc or if you want to the animation to be played once.
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <Row>
          <Col style={{ height: "100%" }}>
            <div className="productDescriptionSection">
              <img
                className="productDescriptionSection-img"
                src="product-description.jpg"
                alt="Cool collar pic"
              />
            </div>
          </Col>
        </Row>
      </motion.div>
      <Row>
        <Col style={{ marginBottom: "30px" }}>
          <div className="productDescriptionSection2">
            <h1>Our Collars</h1>

            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ rotate: 360, scale: 1 }}
              viewport={{ once: true }}
              //damping slows down the bounciness that the element comes witht the default  type "spring"
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 15,
              }}
              style={{ margin: "auto auto" }}
            >
              Not only do our collars bring a new look to your furry friend.
              They are soft, durable, easy to wash, and washer friendly. It will
              be ruff to choose from our 9 options of different colors and
              patterns, so you might want to consult your pet before purchase 🐾
            </motion.p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDesc;
