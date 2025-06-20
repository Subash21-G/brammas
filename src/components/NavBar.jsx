import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './NavBar.css'; // Optional custom styles
import logo from '../assets/Logo.jpg'; // Your image path
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" bg="white" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="School Logo"
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto gap-4 fw-bold align-items-center">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link as={Link} to={"/Admin"}>ADMISSION</Nav.Link>
            <NavDropdown
              title={<span className="acadmics">ACADMICS</span>}
              id="basic-nav-dropdown"
              className="academics-dropdown text-white"
            >
              <NavDropdown.Item href="#counselling">Counselling</NavDropdown.Item>
              <NavDropdown.Item href="#brammaas programe">Brammaas Programe</NavDropdown.Item>
              <NavDropdown.Item href="#digital classroom">Digital Classroom</NavDropdown.Item>
              <NavDropdown.Item href="#all academics">All Academics</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#toppers">TOPPERS</Nav.Link>
            <Nav.Link as={Link} to={"/Gallery"}>GALLERY</Nav.Link>
            <Nav.Link href="#infrastructure">INFRASTRUCTURE</Nav.Link>
            <Nav.Link href="#about us">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to={"/Contactus"}>CONTACT US</Nav.Link>
          </Nav>

          <div className="search-circle">
            <FaSearch color="white" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
