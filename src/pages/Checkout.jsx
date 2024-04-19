import React from "react";

const Checkout = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Left container */}
        <div className="col-md-8">
          <h4>Review and Place Order</h4>
          <p>Review / Add address and fulfill payments to complete your purchase</p>
          <hr />
          <h5>Recipient Information</h5>
          <button className="btn btn-dark">Add Recipient</button>
          <hr />
          <h5>Delivery Address</h5>
          <button className="btn btn-dark">Add Delivery Address</button>
          <hr />
          <button className="btn btn-success">Place your order</button>
        </div>

        {/* Right container */}
        <div className="col-md-4">
          <h4>Your Order</h4>
          <hr />
          <div>
            <p>Double Grilled Chicken Burger</p>
            <button className="btn btn-danger">Delete</button>
            <span>$10.00</span>
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn btn-outline-secondary">-</button>
              <span>1</span>
              <button className="btn btn-outline-secondary">+</button>
            </div>
          </div>
          <hr />
          <div>
            <p>Items Total</p>
            <span>$10.00</span>
          </div>
          <div>
            <p>Discount</p>
            <span>$0.00</span>
          </div>
          <div>
            <p>Delivery Charge</p>
            <span>$0.00</span>
          </div>
          <hr />
          <div>
            <p>Total</p>
            <span>$12,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

