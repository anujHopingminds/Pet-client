import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-light mt-5 py-5">
        <Container className="pt-5">
          <Row className="g-5">
            <Col lg={3} md={6}>
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Get In Touch</h5>
              <p className="mb-4">For more queries</p>
              <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />Chandigarh, India</p>
              <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" />pawsitivestar@gmail.com</p>
              <p className="mb-0"><FontAwesomeIcon icon={faPhone} className="text-primary me-2" />+91 9568745965</p>
            </Col>
            <Col lg={3} md={6}>
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Home</a>
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />About Us</a>
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Our Services</a>
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Meet The Team</a>
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Latest Blog</a>
                <a className="text-body" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Contact Us</a>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Popular Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Home</a>
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />About Us</a>
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Our Services</a>
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Meet The Team</a>
                <a className="text-body mb-2" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Latest Blog</a>
                <a className="text-body" href="#"><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Contact Us</a>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Newsletter</h5>
              <Form>
                <Form.Group className="input-group">
                  <Form.Control type="email" placeholder="Your Email" className="p-3" />
                  <Button variant="primary">Sign Up</Button>
                </Form.Group>
              </Form>
              <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <Button variant="outline-primary" className="btn-square me-2"><FontAwesomeIcon icon={faTwitter} /></Button>
                <Button variant="outline-primary" className="btn-square me-2"><FontAwesomeIcon icon={faFacebook} /></Button>
                <Button variant="outline-primary" className="btn-square me-2"><FontAwesomeIcon icon={faLinkedin} /></Button>
                <Button variant="outline-primary" className="btn-square"><FontAwesomeIcon icon={faYoutube} /></Button>
              </div>
            </Col>
            <Col xs={12} className="text-center text-body">
              <a className="text-body" href="#">Terms & Conditions</a>
              <span className="mx-1">|</span>
              <a className="text-body" href="#">Privacy Policy</a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-fluid bg-dark text-white-50 py-4">
        <Container>
          <Row className="g-5">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-md-0">&copy; <a className="text-white" href="https://freewebsitecode.com/">Pawsitive Star</a>. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
