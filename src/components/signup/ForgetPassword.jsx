import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Email is required');
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/forgetPassword', { email });
      toast.success('Password reset link sent to your email');
      // Redirect to reset password page with email as a URL parameter
      navigate(`/resetPassword?email=${encodeURIComponent(email)}`);
    } catch (error) {
      toast.error('Failed to send password reset link');
    }
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
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default ForgetPassword;