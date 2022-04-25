import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "../../hooks/useFirebase";
import auth from "../firebase.init";
import "./login.css";

const Login = () => {
  const { userEmail, emailLogin, googleLogin, grabEmail, grabPass } =
    useFirebase();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const resetPass = () => {
    if (!userEmail) {
      toast("Enter email");
    } else {
      sendPasswordResetEmail(userEmail);
      if (sending) {
        return toast("Email is being sent...");
      }
      if (error) {
        toast(error?.message);
      } else {
        toast("Reset email sent");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="container mx-auto my-4">
        <h2 className="text-center">Please, Login</h2>
        <div>
          <div className="col-12 col-md-8 col-lg-6 mx-auto p-4 bg-light my-4 rounded">
            <div className="login-btns">
              <Button
                onClick={() => googleLogin(from)}
                variant="dark"
                type="submit"
                className="mb-4"
              >
                Google Sign In
              </Button>
              {/* <Link to="/register" className="btn btn-dark mb-4">
                Register
              </Link> */}
            </div>
            <Form className="mx-auto" onSubmit={emailLogin}>
              <FloatingLabel
                controlId="floatingInput"
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
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  name="password"
                  onChange={grabPass}
                  type="password"
                  placeholder="Password"
                  required
                />
              </FloatingLabel>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-decoration-none">
                  Register now
                </Link>
              </p>
              {/* {error && <span>{()=>toast(error.message)}</span>} */}
              <div className="login-btns">
                <Button variant="primary" type="submit" className="mt-3">
                  Login
                </Button>
              </div>
            </Form>
            <p>
              Forgot password?{" "}
              <span onClick={resetPass} className="reset-btn text-primary">
                Reset Password
              </span>
            </p>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
