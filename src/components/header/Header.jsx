import React, { useState } from 'react'
import { Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Navbar color="faded" className="mb-50" light fixed='top' expand="md">
      <Container>
        <Link className="logo" to="/"><img className="w-100" src="/assets/images/placeholder.jpg" alt=""/></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                  <Link to="/about">About</Link>
              </NavItem>
              <NavItem>
                    <Link to="/news">News</Link>
              </NavItem>
              <NavItem>
                  <Link to="/contact">Contact</Link>
              </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;