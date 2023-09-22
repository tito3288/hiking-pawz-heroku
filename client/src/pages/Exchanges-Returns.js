import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../Links.css";
import { useForm, ValidationError } from "@formspree/react";
import SuccessContact from "../components/SuccessContact";
import { Link } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";

const ExchangesReturns = () => {
  const [state, handleSubmit] = useForm("mpzerzrb");
  if (state.succeeded) {
    return <SuccessContact />;
  }

  return (
    <div>
      <ScrollToTop />
      <NavbarComp />
      <Container style={{ display: "flex" }}>
        <div className="exch-returns-content">
          <div className="exchange-logo-outline">
            <img className="exch-logo" src="transparant-logo.png" alt="logo" />
          </div>
          <Form onSubmit={handleSubmit} className="exch-form">
            <div className="exchform-content">
              <h1 className="form-header">
                Exchanges <br /> & Returns
              </h1>
              <p style={{ textAlign: "center" }}>
                After your payment, you will recive an email of instructions on
                how to submit a return or an exchange. If you did not recive
                this email or have any other questions about your order please
                provide your email and order number and we'll get back to you as
                soon as possible, Thank You!
              </p>
              <Form.Group className="mb-3">
                <Form.Control
                  className="exch-textfield"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="exch-textfield"
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Order Number"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </Form.Group>
              <Button
                className="return-button"
                variant="primary"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ExchangesReturns;
