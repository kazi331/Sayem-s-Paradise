import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import CustomLink from "./customLink/CustomLink";
import "./header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const LogOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sayem's Paradise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/courses">Courses</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/current-user" className="display-user">
              {user?.displayName ? (
                <span>{user?.displayName}</span>
              ) : (
                <span>{user?.email}</span>
              )}
            </Nav.Link>
            {user ? (
              <Nav.Link onClick={LogOut}>Log Out</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
