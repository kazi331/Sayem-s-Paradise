import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const CurrentUser = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user?.uid ? (
        <div className="current-user">
          <img src={user?.photoURL} alt="" />
          <p className="text-success text-center py-4">
            Current User: {user?.displayName} ({user?.email})
          </p>
        </div>
      ) : (
        <p className="text-center py-4 mt-4">No logged in user found </p>
      )}
    </div>
  );
};

export default CurrentUser;
