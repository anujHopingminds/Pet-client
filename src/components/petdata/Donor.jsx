import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { post } from '../api/apiService'
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
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('petName', petName);
    formData.append('DOB', DOB);
    formData.append('age', age);
    formData.append('breed', breed);
    formData.append('color', color);
    formData.append('sex', sex);
    formData.append('size', size);
    formData.append('arrivedFrom', arrivedFrom);
    formData.append('rehomeOrRescued', rehomeOrRescued);
    formData.append('file', image);

    try {
      const response = await post('/userData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Pet profile submitted successfully');
      navigate(`/profileDetail/${response.data.data._id}`);
    } catch (error) {
      console.error('There was an error uploading the form data:', error);
      toast.error('Failed to submit pet profile');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center p-5 petProfileForm">
        <Col md="8">
          <Card className="p-4">
            <h1 className="text-center mb-4">Pet Profile Form</h1>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formPetName" className="mb-3">
                    <Form.Label>Pet Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter pet name"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formDOB" className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      value={DOB}
                      onChange={(e) => setDOB(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formAge" className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBreed" className="mb-3">
                    <Form.Label>Breed</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter breed"
                      value={breed}
                      onChange={(e) => setBreed(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formColor" className="mb-3">
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formSex" className="mb-3">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter sex"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formSize" className="mb-3">
                    <Form.Label>Size</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formArrivedFrom" className="mb-3">
                    <Form.Label>Arrived From</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter arrived from"
                      value={arrivedFrom}
                      onChange={(e) => setArrivedFrom(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formRehomeOrRescued" className="mb-3">
                    <Form.Label>Rehomed/Rescued</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter rehomed or rescued"
                      value={rehomeOrRescued}
                      onChange={(e) => setRehomeOrRescued(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formImage" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={handleImageChange}
                      required
                    />
                  </Form.Group>
                  {imagePreview && (
                    <div className="text-center mb-3">
                      <Image src={imagePreview} alt="Pet Preview" fluid />
                    </div>
                  )}
                </Col>
              </Row>
              <Button onClick={handleSubmit} variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Card>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default Donor;