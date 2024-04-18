import React, { useEffect, useState } from "react";
import jazzyLogo from "../assets/navbar-jazzy-logo.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import  IoEyeOffOutline  from "react-icons/io5";
import  IoEyeOutline  from "react-icons/io5";


const Signin = () => {
  const [isReveal , setIsReveal] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  function handleToggle (){
    !isReveal ? setIsReveal(true) : setIsReveal(false)
  }
  useEffect(() => {
    document.title = "Login Page";
  });
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
            {/*   Input for EMail */}
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

            {/* input for password */}
            <Form.Label className="fs-6 text-secondary"> Password</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type={isReveal ? "text" :"password"}
                placeholder="Password"
                className="border border-3 rounded-3"
                {...register("password", {required:true})}
              />
              {errors.password && <span className="text-danger fw-bold">This field is required</span> }
              <p class='position-absolute end-0 top-0 mt-3 me-2' role="button" onClick={handleToggle}>{isReveal ? { IoEyeOffOutline} : { IoEyeOutline}}</p>
            </FloatingLabel>

            {/* Below is for check box */}
            <div className="d-flex justify-content-between mt-3">
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={"keep me signed in"}
                    className="fs-6 fw-bold"
                  />
                </div>
              ))}
              <Link className="text-decoration-none" to='/Home'>Reset Password</Link>
            </div>
            <button className="btn btn-danger fs-3 text-white w-100">Sign In</button>
            <p className="text-center mt-3 fw-bold" >Don't Have an Account?
            <Link className="text-decoration-none" to='/Signup'>Create One</Link>
            </p>
          </Form>
        </div>
      </main>
    </>
  );
};

export default Signin;
