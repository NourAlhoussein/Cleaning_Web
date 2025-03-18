import React from "react";
import { Container, Image, Navbar, Nav, Button } from "react-bootstrap";
import "../css/NavbarCss.css";
import logo from "../images/navbar-logo.png";
import { NavLink } from "react-router-dom";
function MainNavbar() {
  // const [activeItem, setActiveItem] = useState("Home");
  // const handleItemClick = (item) => {
  //   setActiveItem(item);
  // };
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-light px-5">
      <Container>
        <Navbar.Brand className="flex">
          <Image src={logo} className="inline" fluid />
          <div className="flex fw-bold px-1 fs-3">Clean-X</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="align-item-nav-center nav-bg p-4">
          <NavLink
            to="/"
            exact
            className="nav-item-color nav-item-style active-link-hover active-link px-3"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="nav-item-color nav-item-style active-link-hover active-link px-3"
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className="nav-item-color nav-item-style active-link-hover active-link px-3"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-item-color nav-item-style active-link-hover active-link px-3"
          >
            Contact
          </NavLink>
          <Nav.Link>
            <Button className="button-nav-style bold item-display-none fw-500">
              Book Now
            </Button>
          </Nav.Link>
          <div className="nav-item-color fs-5 item-display-none fw-bold">
            Get in touch
          </div>
          <div className="nav-item-color item-display-none fs-6">
            555-555-5555
          </div>
          <div className="nav-item-color fs-5 mt-3 item-display-none">
            mymail@mailservice.com
          </div>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link className="fw-500 px-4 fs-6 navbar-item-display">
        {" "}
        +123 456 7890
      </Nav.Link>
      <Nav.Link>
        <Button className="button-navbar-style fw-bold fs-6 navbar-item-display">
          Let's Talk
        </Button>
      </Nav.Link>
    </Navbar>
  );
}
export default MainNavbar;
