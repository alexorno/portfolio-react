import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {

  return(
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt='logo' />
          </Col>

          <Col sm={6} className="text-center iconswcopyright align-items-center">
            <div className="socialicons">
              <a href='#'><img src={navIcon1} alt='LinkedIn'></img></a>
              <a href='#'><img src={navIcon2} alt='facebook'></img></a>
              <a href='#'><img src={navIcon3} alt='instagram'></img></a> 
            </div>
            <p>
              Copyright 2022.  All rRght Reserved
            </p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}