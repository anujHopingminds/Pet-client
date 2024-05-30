import { Container, Row, Col } from 'react-bootstrap';

function AdoptionStories() {
  return (
    <div className="container-fluid bg-offer my-5 py-5 poster">
         <img src='images/offer.jpg' alt='poster' />
      <Container className="py-5 poster-inner">
        <Row className="gx-5 justify-content-start">
          <Col lg={7}>
            <div className="border-start border-5 border-dark ps-5 mb-5">
              {/* <h6 className="text-dark text-uppercase">Special Offer</h6> */}
              <h1 className="display-5 text-uppercase text-white mb-0">Adoption Stories and Testimonials</h1>
            </div>
            <p className="text-white mb-4">
              "A simple google search is what brought me to who would become my best friend I named Jackson.
              I had been visiting shelters and searching online for weeks to adopt a dog when I came across
              Jackson's posting online. After some correspondence with Mia, we scheduled a time for us to meet and
              discuss not only the possibility of Jackson's adoption but also my capabilities and expectations as a
              responsible dog owner."
            </p>
            {/* <a href="" className="btn btn-light py-md-3 px-md-5 me-3">Read More</a> */}
            {/* <a href="" className="btn btn-outline-light py-md-3 px-md-5">Read More</a> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdoptionStories;
