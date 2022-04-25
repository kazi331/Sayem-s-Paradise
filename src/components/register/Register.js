import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./register.css";

const Register = () => {
  const {
    handleEmailRegister,
    grabEmail,
    grabPass,
    grabConfirmPass,
    googleLogin,
  } = useFirebase();

  return (
    <div className="register-container">
      <div className="container mx-auto my-4">
        <h2 className="text-center">Please, Register</h2>
        <div>
          <div className="col-12 col-md-8 col-lg-6 mx-auto p-4 bg-light my-4 rounded">
            <div className="btns">
              <Button
                onClick={googleLogin}
                variant="dark"
                type="submit"
                className="mb-4"
              >
                Google Sign In
              </Button>
              {/* <Link to="/login" className="btn btn-dark mb-4">
                Email Login
              </Link> */}
            </div>
            <Form className="mx-auto">
              <FloatingLabel
                label="Email address"
                className="mb-3"
                name="email"
              >
                <Form.Control
                  name="email"
                  onChange={grabEmail}
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>
              <FloatingLabel label="Password" className="mb-3">
                <Form.Control
                  name="password"
                  onChange={grabPass}
                  type="password"
                  placeholder="Password"
                  required
                />
              </FloatingLabel>
              <FloatingLabel label="Confirm Password" className="mb-3">
                <Form.Control
                  name="ConfirmPass"
                  onChange={grabConfirmPass}
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </FloatingLabel>
              <p>
            Already have an account? <Link to="/login" className="text-decoration-none">Login now</Link>
          </p>

              <div className="btns">
                <Button
                  onClick={handleEmailRegister}
                  variant="primary"
                  type="submit"
                  className="mt-3"
                >
                  Register
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
