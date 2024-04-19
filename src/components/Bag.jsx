import React from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const Bag = () => {
  const history = useHistory();

  const handleProceedToCheckout = () => {
    history.push("/checkout");
  };

  return (
    <>
      <Modal show={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p style={{ fontWeight: "bold" }}>Items:</p>
            <hr />
            <p style={{ color: "red" }}>1. Double beef burger</p>
            {/* Add more items here */}
            <hr />
            <p>Item subtotal: $10</p>
            {/* Add subtotal calculation here */}
            <hr />
            <Button variant="success" className="w-100" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Bag;
