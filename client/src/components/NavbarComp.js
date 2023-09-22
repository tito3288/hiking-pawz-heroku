import React from "react";
import {
  Navbar,
  Button,
  Modal,
  Nav,
  Offcanvas,
  OffcanvasTitle,
  Stack,
} from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import ModalCartComp from "./ModalCartComp";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "./Page.css";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import Data from "../Data.json";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  //to show the modal
  const [show, showFunc] = React.useState(false);

  const cart = useContext(CartContext);

  //to get ahold of products in cart
  const productsOnCart = cart.items.reduce((sum, value) => {
    return sum + value.quantity;
  }, 0);

  //to connect to node stripe api
  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  window.addEventListener("scroll", scrollFunction);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbar").style.padding = "15px 15px";
    } else {
      document.querySelector(".navbar").style.padding = "5px 5px";
    }
  }

  return (
    <div>
      <Navbar expand="md" className="navbar" style={{ position: "fixed" }}>
        <Navbar.Brand>
          <div className="logo-outline">
            <Link to="/">
              <img src="transparant-logo.png" className="logo" alt="logo"></img>
            </Link>
          </div>
        </Navbar.Brand>
        <Stack direction="horizontal" className="nav-cart-toggle">
          {productsOnCart > 0 ? (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [2, 1] }}
              transition={{ type: "spring" }}
            >
              <Button
                className="cart"
                style={{
                  backgroundColor: "#171717",
                  color: "#6B011F",
                  border: "none",
                }}
                onClick={() => showFunc(true)}
              >
                <ShoppingCartRoundedIcon /> {productsOnCart}
              </Button>
            </motion.div>
          ) : (
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
              <Button
                className="cart"
                style={{
                  backgroundColor: "#171717",
                  color: "#6B011F",
                  border: "none",
                }}
                onClick={() => showFunc(true)}
              >
                <ShoppingCartRoundedIcon /> {productsOnCart}
              </Button>
            </motion.div>
          )}
          <Navbar.Toggle
            className="nav-toggle"
            style={{
              border: "none",
              backgroundColor: "#121212",
            }}
            aria-controls={`offcanvasNavbar-expand-md`}
          />

          {/* offcanvas start */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            style={{ width: "90%", backgroundColor: "#171717" }}
          >
            <Offcanvas.Header closeButton>
              <OffcanvasTitle
                style={{ color: "white" }}
                id={`offcanvasNavbar-expand-sm`}
              ></OffcanvasTitle>
            </Offcanvas.Header>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0 }}
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className="navbar-links" to="/AboutUs">
                    <motion.p
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      className="home-link"
                    >
                      About Us
                    </motion.p>
                  </Link>

                  <Link className="navbar-links" to="/Contact-Us">
                    <motion.p
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      className="home-link"
                    >
                      Contact Us
                    </motion.p>
                  </Link>
                </Nav>

                {/* SEARCHBAR */}
                <SearchBar data={Data} />
              </Offcanvas.Body>
            </motion.div>
          </Navbar.Offcanvas>
        </Stack>

        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={() => showFunc(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center" }}>
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsOnCart !== 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <ModalCartComp
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></ModalCartComp>
              ))}
              <p style={{ color: "gray" }}>Taxes will be added at checkout</p>
              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

              <Button onClick={checkout} variant="success">
                Checkout
              </Button>
            </>
          ) : (
            <h1>Your Cart Is Empty</h1>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarComp;
