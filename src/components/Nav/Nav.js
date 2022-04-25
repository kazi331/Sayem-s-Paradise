import React from "react";
import useFirebase from "../../hooks/useFirebase";
import Home from "../home/Home";
import CustomLink from "./customLink/CustomLink";
import "./nav.css";

const Nav = () => {
  const { user, logOut } = useFirebase();

  return (
    <div className="header">
      <nav className="py-4">
        <div className="logo text-light">
          <h2>
            <CustomLink to="/" element={<Home />} className="text-light">
              Sayem's Paradise
            </CustomLink>
          </h2>
        </div>
        <div className="links">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/courses">Courses</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <div className="profile">
            {user?.uid ? (
              <div>
                <span className="text-light mx-2">
                  {user.displayName ? user?.displayName : user?.email}
                </span>
                <img src={user.photoURL && user?.photoURL} alt="" />
                <span className="logout" onClick={logOut}>
                  Logout
                </span>
              </div>
            ) : (
              <div className="div">
                <CustomLink className="login" to="/login">
                  Login
                </CustomLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav
