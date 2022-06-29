import React, { useState } from 'react'
import { Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Navbar color="faded" className="mb-5" light fixed='top' expand="md">
      <Container>
        <Link className="logo" to="/"><img className="w-100" src="/assets/images/placeholder.jpg" alt=""/></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact activeClassName="active" to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact activeClassName="active" to="/news">News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;