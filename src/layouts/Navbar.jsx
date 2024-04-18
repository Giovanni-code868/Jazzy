import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";
import navLogo from "../assets/navbar-jazzy-logo.svg";
import locationLogo from "../assets/navbar-location-logo.svg";
import cartLogo from "../assets/navbar-cart-logo.svg";
import profileLogo from "../assets/navbar-profile-logo.svg";
import bellLogo from "../assets/navbar-bell-logo.svg";
import arrowLogo from "../assets/navbar-arrow-logo.svg";
import AuthdropDown from "../components/AuthdropDown";
import Bag from "../components/Bag";

const Navbar = () => {
  const [authShow , setAuthShow] = useState(false)
  const [bagShow , setBagShow] = useState(false)
  return (
    <>
      <main>
        <nav className="container d-flex justify-content-between ">
          {/* Section-1 */}
          <section className="d-flex justify-content-between align-items-center gap-3">
            <div>
              <Link to="/">
                <img src={navLogo} alt="nav-Logo" className="img-fluid p-3" />
              </Link>
            </div>
            {/* Div-2 */}
            <div>
              <img src={locationLogo} alt="Location-logo"className="d-none d-lg-block"/>
            </div>
            <h5 className="text-danger d-none d-lg-block">Lagos, Nigeria</h5>
          </section>

          {/* Section-2 */}
          <section className="d-flex justify-content-between align-items-center gap-4">
            <img src={bellLogo} alt="Bell-logo" className="img-fluid" />
            <h5 className="d-none d-lg-block text-danger mt-3">All Products</h5>
            
            {/* Div-1 */}
            <div className="d-flex gap-3 position-relative" role="button" onClick={()=> !authShow ? setAuthShow(true) : setAuthShow(false)}>
             <img src={profileLogo} alt="profile-logo" />
             <h5 className="d-none d-lg-block mt-3 text-secondary">Hi, Guest</h5>
             {!authShow ?(
              <div className="d-none d-lg-block mt-3 text-secondary">
              <GoChevronDown/>
              </div>
             ) :
             (
              <div className="d-none d-lg-block mt-3 text-secondary">
              <GoChevronUp/>
              </div>
             )
             }
            <div className="position-absolute top-100 end-0 mt-3">
              {authShow && <AuthdropDown/>}
            </div>
            </div>

            {/* div-2 */}
            <div onClick={()=> (!bagShow ? setBagShow(true):setBagShow(false))}>
            <div className="position-relative">
              <div className="position-absolute top-0 start-100 translate-middle bg-danger text-light rounded-circle w-75 text-center h-75 p-1 fw-bold">
                <p className="">{}</p>
              </div>
              <img role="button" src={cartLogo} alt="" />
            </div>
            </div>
           
          </section>
        </nav>
        <div className="position-absolute end-0">{bagShow && <Bag/>}</div>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
