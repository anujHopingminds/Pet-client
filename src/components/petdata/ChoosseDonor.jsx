import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ChooseDonor() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-container">
        <Col md="6">
          <h1 className="text-center mb-4">Choose Method</h1>
          <ul className="list-unstyled">
            <li className="mb-3">
              <Button as={Link} to="/donor" variant="primary" className="w-100">
                As Donor
              </Button>
            </li>
            <li>
              <Button as={Link} to="/petProfile" variant="secondary" className="w-100">
                As Adopter
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ChooseDonor;
