import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { NavbarBrand, NavItem, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 70) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <NavbarBrand href='/'>
          <h3 className='brand'>
            <b>{"< itzprasuk />"}</b>
          </h3>
        </NavbarBrand>
        <NavbarToggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </NavbarToggle>
        <NavbarCollapse id='responsive-navbar-nav'>
          <Nav className='ml-auto' defaultActiveKey='#home'>
            <NavItem>
              <NavLink as={Link} to='/' onClick={() => updateExpanded(false)}>
                <i className='fas fa-home'></i> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as={Link}
                to='/about'
                onClick={() => updateExpanded(false)}
              >
                <i className='fas fa-user'></i> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as={Link}
                to='/project'
                onClick={() => updateExpanded(false)}
              >
                <i className='fas fa-code-branch'></i> Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as={Link}
                to='/resume'
                onClick={() => updateExpanded(false)}
              >
                <i className='fas fa-file-pdf'></i> Resume
              </NavLink>
            </NavItem>

            <NavItem className='fork-btn'>
              <Button
                href='https://github.com/itzprasuk/DevFolio'
                target='_blank'
                className='fork-btn-inner'
              >
                <i className='far fa-star'></i>
              </Button>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
