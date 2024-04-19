import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import image from "../assets/navbar-jazzy-logo.svg";
import image2 from "../assets/navbar-location-logo.svg";
import Bellvector from "../assets/navbar-bell-logo.svg";
import guestlogo from "../assets/navbar-profile-logo.svg";
import cartlogo from "../assets/navbar-cart-logo.svg";
import AuthDropDown from "../components/AuthdropDown";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import Bag from "../components/Bag";

const Navbar = ({ cartItem }) => {
  const [authShow, setAuthShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);

  return (
    <>
      <main className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <section className="d-flex justify-content-between align-items-center gap-3">
            {/* section one */}
            <div>
              <Link to="/">
                <img src={image} alt="jazzy-logo" className="img-fluid p-3" />
              </Link>
            </div>
            <div className="d-flex gap-3">
              <img
                src={image2}
                alt="location-logo"
                className="d-none d-md-block"
              />
              <h5 className="text-danger d-none d-md-block">Lagos,Nigeria</h5>
            </div>
          </section>
          <section className="d-flex justify-content-end align-items-center gap-3">
            {/* section two */}
            <div className="d-flex gap-2 align-items-center">
              <img src={Bellvector} alt="bell-logo" />
              <h5 className="text-danger d-none d-md-block mt-2">
                All Products
              </h5>
            </div>
            <div
              className="d-flex gap-2 align-items-center position-relative"
              role="button"
              onClick={() =>
                !authShow ? setAuthShow(true) : setAuthShow(false)
              }
            >
              <img src={guestlogo} alt="guest-logo" />
              <h5 className="d-none d-md-block mt-2 text-secondary">
                Hi,Guests
              </h5>
              {!authShow ? (
                <div className="d-none d-lg-block mt-1 text-secondary">
                  <GoChevronUp />
                </div>
              ) : (
                <div className="d-none d-lg-block mt-1 text-secondary">
                  <GoChevronDown />
                </div>
              )}
              <div className="position-absolute top-100 end-0 mt-2">
                {authShow && <AuthDropDown />}
              </div>
            </div>

            {/* Bag component */}
            <div className="d-flex align-items-center">
              <div className="position-relative" onClick={() => setCartShow(!cartShow)}>
                <div>
                  <p className="position-absolute top-0 start-100 bg-danger translate-middle rounded-circle text-light fw-bold text-center px-1">
                    {cartItem.length}
                  </p>
                </div>
                <img src={cartlogo} alt="cart-logo" />
              </div>
              {cartShow && <Bag />}
            </div>
          </section>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
