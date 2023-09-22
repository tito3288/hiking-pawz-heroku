import React from "react";
import "./Page.css";
import { Stack } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FooterPage = () => {
  const year = new Date().getFullYear();

  const navigate = useNavigate();

  function handleExchangesReturns() {
    //useNavigate is another example of using the <Link elemnt around the element we want to convert into a link, we just use the onClick method on the element instead
    navigate("/Exchanges-Returns");
  }

  return (
    <div className="footer">
      <div className="footer-policies">
        <Link
          to="/Exchanges-Returns"
          style={{ color: "#6b011f", textDecoration: "none" }}
        >
          <p style={{ marginBottom: "1px" }}>Exchanges and Returns Form</p>
        </Link>
        <Link
          to="/Contact-Us"
          style={{ textDecoration: "none", color: "#6b011f" }}
        >
          <p
            style={{
              marginBottom: "1px",
            }}
          >
            Contact
          </p>
        </Link>
        <Link to="/WarrantyPolicies">
          <p style={{ marginBottom: "1px", color: "#6b011f" }}>
            Warranty and <br /> Return Policy
          </p>
        </Link>
        <div style={{ marginTop: "5px" }}>
          <Link to="https://www.instagram.com/hikingpawz/">
            <InstagramIcon style={{ color: "white" }} />
          </Link>
          <Link to="https://www.facebook.com/Hikingpawz/">
            <FacebookIcon style={{ color: "white" }} />
          </Link>
        </div>
      </div>
      <h6 className="footer-trademark">© {year} Hiking Pawz</h6>
    </div>
  );
};

export default FooterPage;
