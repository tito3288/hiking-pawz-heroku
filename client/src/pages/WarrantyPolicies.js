import React from "react";
import { Container } from "react-bootstrap";
import "../Links.css";
import { Link } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";

const WarrantyPolicies = () => {
  return (
    <div>
      <ScrollToTop />
      <NavbarComp />
      <Container style={{ display: "flex" }}>
        <div className="warranty-content">
          <div className="exchange-logo-outline">
            <img className="exch-logo" src="transparant-logo.png" alt="logo" />
          </div>
          <div className="exchform-content">
            <h1 className="form-header">
              Exchanges <br /> & Returns
            </h1>
            <p style={{ textAlign: "center" }}>
              Returns & Exchanges All of our products are made to last with our
              sustainable webbing. Our warranty covers flaws in workmanship,
              materials and buckle damage. For an exchange only send the flawed
              product back to us and we’ll replace it with the same or
              comparable model. Any lost products by the customer will not be
              refunded. To be eligible for a return on any products other than
              dog collars, your item must be unused and in the same condition
              that you received it. Full refunds will be honored after 90 days
              of original purchase not including return shipping on any of our
              products including dog collars. To request a return or exchange,
              please contact us at hikingpawz@gmail.com or through the Contact
              Us page. A receipt or proof of purchase is required to process all
              returns and exchanges. Refunds You will be notified by email once
              we have received your returned item. You are responsible for
              shipping unless the error was Hiking Pawz fault. If the item(s)
              are approved for a return, then your refund will be processed, and
              a credit will be applied to your original payment method within 7
              days. Exchanges We will only exchange items if they are defective
              or damaged upon receipt except for dog collars. Dog collars can be
              exchanged at anytime and only refunded after 90 days of original
              purchase. Exchanges will only be honored for identical items. If
              the item has sold out, you may select a similar item with the same
              value as the original purchase. If you need to exchange your
              item(s), please contact us within 5 business days of receipt.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WarrantyPolicies;
