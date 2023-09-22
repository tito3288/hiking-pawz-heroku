import React from "react";
import NavbarComp from "../components/NavbarComp";
import FooterPage from "../components/FooterPage";
import { Button, Form, Container } from "react-bootstrap";
import "../Links.css";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import SuccessContact from "../components/SuccessContact";
import ScrollToTop from "../components/ScrollToTop";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mjvdrkdj");
  if (state.succeeded) {
    return <SuccessContact />;
  }

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerHeight,
        transition: { duration: 0.1, type: "spring", bounce: 0.5 },
      }}
      className="flex-wrapper"
      style={{
        backgroundColor: "#171717",
        backgroundImage: "url(./backgrounds/hiking-background.png)",
      }}
    >
      <ScrollToTop />
      <NavbarComp />
      <Container style={{ display: "flex" }}>
        <div
          style={{ backgroundImage: "url(./backgrounds/black-felt.png)" }}
          className="subscription contact-page"
        >
          <Form onSubmit={handleSubmit} className="contactpage-content">
            <h1>Give Us A Bark!</h1>
            <p>
              Let us know how we can do better, have any questions or just
              simply want to talk to us.
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                style={{ marginBottom: "10px" }}
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              {/* change the text area width for mobile and desktop */}
              <textarea
                className="contact-us-textarea"
                id="message"
                name="message"
                placeholder="Description"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </Form.Group>
            <Button
              className="contactus-submitbtn"
              variant="primary"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <FooterPage />
    </motion.div>
  );
};

export default ContactUs;
