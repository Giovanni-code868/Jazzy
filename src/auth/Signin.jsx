import React, { useEffect, useState } from "react";
import jazzyLogo from "../assets/navbar-jazzy-logo.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from 'react-icons/bs'; 

const Signin = () => {
  const [isReveal, setIsReveal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    document.title = "Login Page";
  });

  function handleToggle() {
    setIsReveal(!isReveal);
  }

  return (
    <>
      <main className="container vh-50 d-flex flex-column my-3">
        <div>
          <div className="text-center">
            <Link rel="">
              <img src={jazzyLogo} alt="jazzyLogo" />
            </Link>
          </div>
          <h2 className="fs-3 fw-bold my-4 text-center w-75 m-auto">
            SIGN IN TO YOUR ACCOUNT
          </h2>
          {/* Form */}
          <Form className="w-75 m-auto" onSubmit={handleSubmit(onSubmit)}>
            {/* Input for Email */}
            <Form.Label className="fs-6 text-secondary">Email</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="border border-3 rounded-3"
                {...register("email")}
              />
            </FloatingLabel>

            {/* Input for password */}
            <Form.Label className="fs-6 text-secondary">Password</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type={isReveal ? "text" : "password"}
                placeholder="Password"
                className="border border-3 rounded-3"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-danger fw-bold">This field is required</span>
              )}
              {/* Show/hide toggle */}
              {isReveal ? (
                <BsEyeSlash
                  className="position-absolute end-0 top-50 translate-middle-y me-2"
                  onClick={handleToggle}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <BsEye
                  className="position-absolute end-0 top-50 translate-middle-y me-2"
                  onClick={handleToggle}
                  style={{ cursor: "pointer" }}
                />
              )}
            </FloatingLabel>

            {/* Checkbox and Reset Password link */}
            <div className="d-flex justify-content-between mt-3">
              <div className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Keep me signed in"
                  className="fs-6 fw-bold"
                />
              </div>
              <Link className="text-decoration-none " to="/Home">
                Reset Password
              </Link>
            </div>

            {/* Sign In button and Create Account link */}
            <button className="btn btn-danger fs-3 text-white w-100">
              Sign In
            </button>
            <p className="text-center mt-3 fw-bold">
              Don't Have an Account?
              <Link className="text-decoration-none" to="/Signup">
                Create One
              </Link>
            </p>
          </Form>
        </div>
      </main>
    </>
  );
};

export default Signin;
