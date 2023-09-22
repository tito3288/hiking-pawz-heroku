import React from "react";
import CardComp from "./CardComp";
import { productArray } from "../productArray";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductComp = () => {
  return (
    <Container>
      <Row xs={2} sm={2} md={3} lg={3}>
        {productArray.map((value, index) => {
          return (
            <Col key={index} align="center" className="g-4">
              <motion.div
                initial={{ x: -20, opacity: 0, scale: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  damping: 6,
                }}
              >
                <CardComp
                  title={value.title}
                  price={value.price}
                  img={value.img}
                  id={value.id}
                  page={value.page}
                />
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductComp;
