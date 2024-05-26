import React from 'react';
import { Container, Row, Col, Image, Nav, Tab } from 'react-bootstrap';

function About() {
  return (
    <div className="container-fluid py-5">
      <Container>
        <Row className="gx-5">
          <Col lg={5} className="mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <Image
                className="position-absolute w-100 h-100 rounded"
                src="images/about.jpg"
                style={{ objectFit: 'cover' }}
                alt="About Us"
              />
            </div>
          </Col>
          <Col lg={7}>
            <div className="border-start border-5 border-primary ps-5 mb-5">
              <h6 className="text-primary text-uppercase">About Us</h6>
              <h1 className="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1>
            </div>
            <h4 className="text-body mb-4">
              " We're challenging old stereotypes and embracing a new way of thinking about adoption — one that
              celebrates diversity, inclusivity, and the transformative power of love "
            </h4>
            <div className="bg-light p-4">
              <Tab.Container id="pills-tab" defaultActiveKey="mission">
                <Nav variant="pills" className="mb-3 justify-content-between">
                  <Nav.Item className="w-50">
                    <Nav.Link eventKey="mission" className="text-uppercase w-100">
                      Our Mission
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-50">
                    <Nav.Link eventKey="vision" className="text-uppercase w-100">
                      Our Vision
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="mission">
                    <p className="mb-0">
                      Giving potential adopters the information and assistance they need to make educated decisions and
                      offer the best possible care for their new furry family members <br />
                      We are dedicated to cultivating a culture of compassion and understanding in which every animal is
                      cherished and each adoption is celebrated as a triumph of love over circumstance
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="vision">
                    <p className="mb-0">
                      We're leading this movement by revolutionising the adoption process <br />
                      We prioritise personalised matchmaking, ensuring that each pet gets the ideal forever home that
                      suits their unique requirements and personality <br />
                      We're also removing barriers to adoption by raising awareness, providing information, and
                      increasing accessibility
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
