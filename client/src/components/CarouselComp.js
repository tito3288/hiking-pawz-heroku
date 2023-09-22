import React from "react";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Page.css";

function CarouselComp() {
  return (
    <div className="carousel-section">
      <Carousel fade className="carousel-items">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src="./carousel/terra-collar-carousel.jpg"
            alt="First slide"
          />
          {/* CREATE STYLE IN CSS FILE */}
          <Carousel.Caption className="carousel-caption">
            <Link to="/Col7">
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  damping: 9,
                }}
                className="terra-carousel"
              >
                Terra Collar
              </motion.h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src="./carousel/thor-carousel.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-caption">
            <Link to="/ItemPage">
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  damping: 9,
                }}
                className="thor-carousel"
              >
                Flair Collar
              </motion.h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src="./carousel/lake.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-caption-logo">
            <motion.img
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 9,
              }}
              src="transparant-logo.png"
              className="carousel-caption-image"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
