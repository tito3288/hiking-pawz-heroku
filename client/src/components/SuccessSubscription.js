import React from "react";
import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./Page.css";
import { Link } from "react-router-dom";

const SuccessSubscription = () => {
  //MOVE ALL THE CSS TO A CSS FILE AND ALSO MAKE THE ELEMENTS DYNAMIC/ MOBILE AND DESKTOP

  return (
    <div
      style={{
        backgroundImage: "url(./backgrounds/contact-page-background.png",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Confetti style={{ height: "100%" }} />
      <Link to="/">
        <Button className="subs-homepage-btn">Home Page</Button>
      </Link>
      <Container>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: "5" }}
          src="subscrition-pooch.png"
          alt="Succes pooch"
          className="success-subs-dog"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="success-subs-title"
        >
          Thank you for subscribing!
          <br />
          We'll keep you updated with animals that are rescued and given a home
          thanks to your purchase, also with any new merch dates and sneak
          peaks.
        </motion.h1>
      </Container>
    </div>
  );
};

export default SuccessSubscription;
