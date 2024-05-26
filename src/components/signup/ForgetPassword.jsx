import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the reset password page with the email as a URL parameter
    navigate(`/resetPassword?${encodeURIComponent(email)}`);
  };

  return (
    <Container>
      <Row className="justify-content-md-center forgetPassword">
        <Col md="6">
          <h1 className="my-4">Forgot Password</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Reset Link
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgetPassword;
