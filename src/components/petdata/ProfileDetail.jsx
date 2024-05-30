import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner, Container, Row, Col, Card, Image, Alert } from 'react-bootstrap';

function ProfileDetail() {
  const { id } = useParams();
  const [petData, setPetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${id}`)
      .then(response => {
        setPetData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {error.message}</Alert>;
  }

  return (
    <Container className="my-5 align-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Row className="g-0">
              <Col md={4}>
                <Image src={petData.imageUrl} alt={petData.petName} className="img-fluid rounded-start" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{petData.petName}</Card.Title>
                  <Card.Text>
                    <strong>Date of Birth:</strong> {new Date(petData.DOB).toLocaleDateString()} <br />
                    <strong>Age:</strong> {petData.age} <br />
                    <strong>Category:</strong> {petData.category} <br />
                    <strong>Color:</strong> {petData.color} <br />
                    <strong>Sex:</strong> {petData.sex} <br />
                    <strong>Size:</strong> {petData.size} <br />
                    <strong>Arrived From:</strong> {petData.arrivedFrom} <br />
                    <strong>Rehome or Rescued:</strong> {petData.rehomeOrRescued}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileDetail;
