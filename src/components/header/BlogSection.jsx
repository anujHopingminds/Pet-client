import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const BlogSection = () => {
  return (
    <div className="container-fluid py-5">
      <Container>
        <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
          <h6 className="text-primary text-uppercase">Latest Blog</h6>
          <h1 className="display-5 text-uppercase mb-0">Latest Articles From Our Blog Post</h1>
        </div>
        <Row className="g-5">
          <Col lg={6}>
            <div className="blog-item">
              <Row className="g-0 bg-light overflow-hidden">
                <Col xs={12} sm={5} className="h-100">
                  <Image className="img-fluid h-100" src="images/blog-1.jpg" style={{ objectFit: 'cover' }} />
                </Col>
                <Col xs={12} sm={7} className="h-100 d-flex flex-column justify-content-center">
                  <div className="p-4">
                    <h5 className="text-uppercase mb-3">Pet Behaviour and Traits</h5>
                    <Button variant="link" className="text-primary text-uppercase p-0">
                      Read More<i className="bi bi-chevron-right"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="blog-item">
              <Row className="g-0 bg-light overflow-hidden">
                <Col xs={12} sm={5} className="h-100">
                  <Image className="img-fluid h-100" src="images/blog-2.jpg" style={{ objectFit: 'cover' }} />
                </Col>
                <Col xs={12} sm={7} className="h-100 d-flex flex-column justify-content-center">
                  <div className="p-4">
                    <h5 className="text-uppercase mb-3">Training to Develop Bond</h5>
                    <Button variant="link" className="text-primary text-uppercase p-0">
                      Read More<i className="bi bi-chevron-right"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogSection;
