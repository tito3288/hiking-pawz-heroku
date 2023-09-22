import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Page.css";
import { motion, useAnimation } from "framer-motion";

const CardComp = (props) => {
  //THESE COLORS ARE USED TO GIVE THE CARD COMP A DARK COLOR AND THE TEXT BE WHITE
  const secondary = "Dark";
  const white = "White";

  const control = useAnimation();

  return (
    <motion.div animate={control}>
      <Card
        onClick={() =>
          control.start({
            scale: [1.2, 1],
          })
        }
        className="card"
        style={{
          boxShadow: "9px 8px 10px rgba(0,0,0,0.5",
        }}
        bg={secondary.toLocaleLowerCase()}
        text={white.toLocaleLowerCase()}
      >
        <Link to={props.page}>
          <Card.Img src={props.img} className="card-image" />
        </Link>
        <Card.Body>
          <Card.Title className="card-collar-title">{props.title}</Card.Title>
          <Card.Text className="card-collar-price">${props.price}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default CardComp;
