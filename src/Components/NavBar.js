import { useState, useEffect } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const onScroll = () => {
    if (window.offsetY > 50) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  window.addEventListener('scroll', onScroll)

  return () => window.addEventListener('scroll', onScroll)
  },[])
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  };
  
  return(
    <Navbar  expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link> 
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> 
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'><img src={navIcon1} alt='navIcon1'></img></a>
              <a href='#'><img src={navIcon2} alt='navIcon2'></img></a>
              <a href='#'><img src={navIcon3} alt='navIcon3'></img></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}