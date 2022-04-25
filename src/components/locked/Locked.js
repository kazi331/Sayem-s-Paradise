import React from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const Locked = ({ children }: { children: JSX.Element }) => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const location = useLocation();
  // protect from coming back to login page after redirect with refresh 
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center p-4 m-4">
        <Spinner className="w-24" animation="border" />
      </div>
    );
  }
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default Locked;
