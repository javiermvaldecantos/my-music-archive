import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationMenu = () => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="/">Menu</Navbar.Brand>
    <Navbar.Toggle aria-controls="navigation-menu--content" />
    <Navbar.Collapse id="navigation-menu--content" className="navigation-menu--content">
      <Nav className="navigation-menu--links">
        <Link className="navigation-menu--link nav-link" to="/">
          Home
        </Link>
        <Link className="navigation-menu--link nav-link" to="/all-songs">
          All songs
        </Link>
        <Link className="navigation-menu--link nav-link" to="/new-song-form">
          Add new song
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationMenu;
