import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Donor() {
  const [petName, setPetName] = useState('');
  const [DOB, setDOB] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [color, setColor] = useState('');
  const [sex, setSex] = useState('');
  const [size, setSize] = useState('');
  const [arrivedFrom, setArrivedFrom] = useState('');
  const [rehomeOrRescued, setRehomeOrRescued] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const petData = {
      petName,
      DOB,
      age,
      breed,
      color,
      sex,
      size,
      arrivedFrom,
      rehomeOrRescued,
    };
    console.log(petData,'9999999999')
    try {
      await axios.post('http://localhost:8000/api/petProfile', petData);
      toast.success('Pet profile submitted successfully');
      // Redirect to a different page after successful submission
      navigate('/petProfiles');
    } catch (error) {
      toast.error('Failed to submit pet profile');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center petProfileForm">
        <Col md="6">
          <h1 className="my-4">Pet Profile Form</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPetName">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pet name"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formColor">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSex">
              <Form.Label>Sex</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSize">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formArrivedFrom">
              <Form.Label>Arrived From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter arrived from"
                value={arrivedFrom}
                onChange={(e) => setArrivedFrom(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formRehomeOrRescued">
              <Form.Label>Rehomed/Rescued</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter rehomed or rescued"
                value={rehomeOrRescued}
                onChange={(e) => setRehomeOrRescued(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}



export default Donor
