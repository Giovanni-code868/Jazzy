import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const Bag = () => {
  const [showModal, setShowModal] = useState(true); 

  const handleCloseModal = () => setShowModal(false);

  // Close the modal after a certain time (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleCloseModal();
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p style={{ fontWeight: "bold" }}>Items:</p>
            <hr />
            <p style={{ color: "red" }}>1. Double beef burger</p>
            
            <hr />
            <p>Item subtotal: $10</p>
            {/* Add subtotal calculation here */}
            <hr />
            <Button variant="success" className="w-100" onClick={handleCloseModal}>
              Proceed to Checkout
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Bag;
