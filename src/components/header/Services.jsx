import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  const services = [
    { icon: 'flaticon-house', title: 'Adoption Listings' },
    { icon: 'flaticon-food', title: 'Adoption Process Guidance' },
    { icon: 'flaticon-grooming', title: 'Pet Care Resources' },
    { icon: 'flaticon-cat', title: 'Post Adoption Support' },
    { icon: 'flaticon-dog', title: 'Pet Exercise' },
    { icon: 'flaticon-vaccine', title: 'Pet Treatment' },
  ];

  return (
    <div className="container-fluid py-5">
      <Container>
        <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
          <h6 className="text-primary text-uppercase">Services</h6>
          <h1 className="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
        </div>
        <Row className="g-5">
          {services.map((service, index) => (
            <Col md={6} key={index}>
              <Card className="bg-light d-flex p-4">
                <i className={`${service.icon} display-1 text-primary me-4`}></i>
                <div>
                  <h5 className="text-uppercase mb-3">{service.title}</h5>
                  {/* <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p> */}
                  <a className="text-primary text-uppercase" href="">
                    Read More<i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
