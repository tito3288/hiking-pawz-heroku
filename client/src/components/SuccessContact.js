import React from "react";
import "../Links.css";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SuccessContact = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./backgrounds/contact-page-background.png)",
        backgroundSize: "cover",
        height: "100vh",
        widht: "100%",
        textAlign: "center",
        // display: "flex",
      }}
    >
      <Link to="/">
        <Button className="homepage-button">Home Page</Button>
      </Link>
      <div className="success-contactus-content">
        <motion.img
          initial={{ x: -100, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 2 }}
          src="13.png"
          alt="dog-chasing"
          className="dog-chasing"
        ></motion.img>
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          alt="truck-wind"
          src="12.png"
          className="truck-wind"
        ></motion.img>
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: 0, rotate: [0, 5, -5, 5, -5, 5, 0] }}
          transition={{ duration: 2.5 }}
          alt="mailman-truck"
          src="11.png"
          className="mailman-truck"
        ></motion.img>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="contact-success-title"
        >
          Thank you for mailing us. <br />
          We'll get back to you as soon as possible!
        </motion.h1>
      </div>
    </div>
  );
};

export default SuccessContact;
