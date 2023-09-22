import React from "react";
import {
  Row,
  Col,
  Stack,
  Button,
  Container,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import "./Page.css";
import { getProductData } from "../productArray";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const ItemComp = (props) => {
  const control = useAnimation();
  const controlDes = useAnimation();

  const productData = getProductData(props.id);
  const cart = useContext(CartContext);

  const [numInCart, numInCartFunc] = React.useState(1);

  function handleSubtractFromCart() {
    if (numInCart <= 0) {
      numInCart = 0;
    } else {
      numInCartFunc(numInCart - 1);
    }

    control.start({
      scale: [1.3, 1],
    });
  }

  function handleAddToFromCart() {
    numInCartFunc(numInCart + 1);

    control.start({
      scale: [1.3, 1],
    });
  }

  function handleAddToCart() {
    cart.addXAmountToCart(props.id, numInCart);
    numInCartFunc(1);
  }

  return (
    <Container style={{ display: "flex" }}>
      <div
        style={{
          backgroundImage: "url(./backgrounds/dark-tire.png)",
          backgroundColor: "#171717",
        }}
        className="item-page-outline"
      >
        <Row className="item-row" xs={1} sm={1} md={1} lg={2}>
          <Col className="item-page-border-right">
            <Container
              //HERE IS WHERE TEMPER WITH THE LOCATION OF THE IMAGE INSIDE THE ITEM ROW, SO WE HAVE TO MAKE IT DYNAMIC, MOBILE AN DDESKTOP, SO GIVE IT A CLASSNAME
              className="slider-contanier"
            >
              <Swiper
                centeredSlides={true}
                loop={true}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                //THIS STYLE GIVES TRHE IMAGE MORE SPACE FOR THE SHADOWS
                style={{
                  height: "100%",
                  padding: "16px",
                  position: "relative",
                }}
              >
                {/* THESE STYLES INSIDE SWIPERSLIDE IS WHERE WE CAN EDIT THE LAYOUT OF EACH IMAGE THATS BEING SLIDE MOVE THESE TO A CSS FILE*/}
                <SwiperSlide
                  className="swiperslide1"
                  // style={{ padding: "1px 38px" }}
                >
                  <img
                    className="item-image"
                    src={productData.gallery[0]}
                    alt="collar"
                  />
                </SwiperSlide>
                <SwiperSlide
                  className="swiperslide2"
                  style={{ padding: "1px 18px" }}
                >
                  <img
                    className="item-image"
                    src={productData.gallery[1]}
                    alt="collar"
                  />
                </SwiperSlide>
                <div className="slider-controler">
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
            </Container>
          </Col>
          <Col
            style={{ marginTop: "6%", color: "white", padding: "30px 30px" }}
          >
            <Stack gap={3}>
              <h1 className="collar-title">{productData.title}</h1>
              <h4 className="price-title">${productData.price}</h4>
              <p className="shipping-title">
                <LocalShippingIcon className="shipping-car" /> Free Domestic
                Shipping
              </p>
              <hr />
              <h5 className="size-title">SIZE</h5>
              <h5 className="checkout-size-title">Select Size At Checkout</h5>

              <ul>
                <li>Large (1-inch Width, 18-22-inch Length)</li>
                <li>Medium (3/4-inch Width 12-17-inch Length)</li>
                <li>Small (5/8-inch Width 8-15-Length)</li>
              </ul>

              <h5 className="quantity-title">QUANTITY</h5>
              <motion.div
                animate={control}
                transition={{ type: "spring" }}
                className="wrapper"
              >
                <span onClick={handleSubtractFromCart} className="minus">
                  -
                </span>
                <span className="num">{numInCart}</span>
                <span onClick={handleAddToFromCart} className="plus">
                  +
                </span>
              </motion.div>

              <Button
                onClick={handleAddToCart}
                variant="primary"
                style={{
                  backgroundColor: "#6b011f",
                  border: "none",
                  fontSize: "20px",
                  fontFamily: "Amatic SC, cursive",
                }}
              >
                Add To Cart
              </Button>
              <OverlayTrigger
                trigger="click"
                placement={"top"}
                overlay={
                  <Popover
                    style={{
                      backgroundColor: "#121212",
                      color: "#6b011f",
                      borderRadius: "20px",
                      textAlign: "center",
                      boxShadow: "15px 15px 10px rgb(0,0,0,0.4)",
                    }}
                  >
                    <Popover.Header
                      style={{
                        backgroundColor: "#171717",
                        fontFamily: "Tilt Neon, cursive",
                      }}
                      as="h3"
                    >
                      {productData.title}
                    </Popover.Header>
                    <Popover.Body
                      style={{
                        color: "white",
                        fontFamily: "Tilt Neon, cursive",
                      }}
                    >
                      <p>{productData.description}</p>
                    </Popover.Body>
                  </Popover>
                }
              >
                <motion.div
                  animate={controlDes}
                  transition={{ type: "spring" }}
                >
                  <Button
                    style={{
                      backgroundColor: "#121212",
                      color: "#6b011f",
                      fontSize: "23px",
                      fontFamily: "Amatic SC, cursive",
                      border: "solid rgb(0,0,0,0.3",
                      width: "100%",
                    }}
                    variant="secondary"
                    onClick={() => controlDes.start({ scale: [1.1, 1] })}
                  >
                    Collar Information
                  </Button>
                </motion.div>
              </OverlayTrigger>
            </Stack>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ItemComp;
