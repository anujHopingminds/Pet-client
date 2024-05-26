import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
function Poster() {
  return (
    <div className='poster'>
      <img src='images/hero1.jpg' alt='poster' />
      <div className="container-fluid  py-5 mb-5 poster-inner">
        <Container className="py-5">
          <Row className="justify-content-start">
            <Col lg={8} className="text-center text-lg-start">
              <h1 className="display-1 text-uppercase text-dark mb-lg-4">Pawsitive Star</h1>
              <h1 className="text-uppercase text-white mb-lg-4">
                Embracing a new era: <br />
                transforming adoption perspective
              </h1>
              <p className="fs-4 text-white mb-lg-4">
                Discover a world of wagging tails, <br /> playful purrs and endless cuddles <br /> as you embark on the journey <br /> of finding your perfect furry friend
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Poster