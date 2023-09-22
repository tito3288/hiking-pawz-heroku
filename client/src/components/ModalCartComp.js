import React from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { getProductData } from "../productArray";

const ModalCartComp = (props) => {
  const cart = useContext(CartContext);
  const productData = getProductData(props.id);

  return (
    <div>
      <h4>{productData.title}</h4>
      <p>{props.quantity} total</p>
      <p>{props.size}</p>
      <p>${productData.price.toFixed(2)}</p>
      <Button
        size="sm"
        variant="danger"
        onClick={() => cart.deleteFromCart(props.id)}
      >
        Remove
      </Button>
      <hr />
    </div>
  );
};

export default ModalCartComp;
