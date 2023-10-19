import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, SetChangeColor] = useState(false);

  const ChangeBackgroundColor = () => {
    if (window.scrollY > 10) {
      SetChangeColor(true);
    } else {
      SetChangeColor(false);
    }
  };

  useEffect(() => {
    ChangeBackgroundColor();

    window.addEventListener('scroll', ChangeBackgroundColor);
  })

let navigate = useNavigate();

  return (
    <div>
      <Navbar expand="lg" bg="body-tertiary" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">Rinnovation.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-link text-center">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>
                Home
              </NavLink>
              <NavLink to="/article" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>
                Article
              </NavLink>
              <NavLink to="/design" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>
                Popular Design
              </NavLink>
              <NavLink to="/pro" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>
                Join Our Pro Network
              </NavLink>
            </Nav>
            <div className="text-center">
              <button className="btn" onClick={() => navigate("/login")}>Sign in</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent