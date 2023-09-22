import React from "react";
import NavbarComp from "../components/NavbarComp";
import FooterPage from "../components/FooterPage";
import { Stack, Container } from "react-bootstrap";
import "../Links.css";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const AboutUs = () => {
  //Move all of the styling on the css page

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerHeight,
        transition: { duration: 0.1 },
      }}
    >
      <ScrollToTop />
      <NavbarComp />
      <Container style={{ display: "flex", backgroundColor: "#F9F9F9" }}>
        <Stack className="aboutus-container">
          <h1
            style={{
              color: "black",
              padding: "20px 20px",
            }}
          >
            About Us
          </h1>
          <img
            src="aboutus.jpg"
            alt="about-us"
            style={{ borderRadius: "20px" }}
            className="aboutus-img"
          />
          <h4 className="aboutus-text">
            We are a small family from South Bend, IN. We have 3 fur babies. A
            Pitbull mix named Peyton, who is the toughest big boi we have but
            the sweetest/gentle one of them all. Our second one is our Border
            Collie/Husky mix named Thor, If energy had an appearance, it would
            be him. Always ready for an adventure even if I'm just getting a
            glass of water at 3 am. Last but not least, is Churra aka Churrina.
            Our Queen as we call her too, our little tuxedo cat she's our newest
            member to the family. I'm a software engineer and my wife is a
            social worker. We are the people that would cross a street to just
            pet your fur ball, if that's also you, glad to meet you 👋 we have a
            lot in common. Currently we are only a small business. We created
            this brand to help organization that are dedicated to help all kinds
            of animals that need help, we've partnered with Rescue Release
            Repeat to donate 50% of the revenue so they can continue with the
            great work that they do taking care of animals that range from cats,
            dogs, racoons, foxes, squirrels etc. Check them out on facebook!{" "}
            <a href="https://www.facebook.com/RescueReleaseRepeat">
              RescueReleaseRepeat
            </a>
            . The other 50% will help us fund new products like leashes,
            harnesses, treats etc. On the merch side like T-shirts, Sweatshirts
            and hats, so stay tuned for those 😁
          </h4>
        </Stack>
      </Container>
      <FooterPage />
    </motion.div>
  );
};

export default AboutUs;
