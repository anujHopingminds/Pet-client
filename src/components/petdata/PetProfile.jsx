import React, { useState, useEffect } from 'react';
import { get } from '../api/apiService';
import { Container, Row, Col, Card, Form, Pagination } from 'react-bootstrap';

const PetProfile = () => {
  const [pets, setPets] = useState([]);
  const [totalPets, setTotalPets] = useState(0); // State to store the total number of pets
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage, setPetsPerPage] = useState(10); // Default number of pets per page

  // Fetch pet data from API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await get('/getPetData', {
          params: { search, page: currentPage, limit: petsPerPage },
        });
        setPets(response.data.data);
        setTotalPets(response.data.total); // Assuming the API response includes a total count of pets
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, [search, currentPage, petsPerPage]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to the first page on new search
  };

  // Calculate pagination
  const totalPages = Math.ceil(totalPets / petsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Pet Profiles</h1>
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by category"
          value={search}
          onChange={handleSearchChange}
        />
      </Form>
      <Row>
        {pets?.map((pet) => (
          <Col md={4} key={pet._id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={pet.imageUrl} alt={pet.petName} />
              <Card.Body>
                <Card.Title>{pet.petName}</Card.Title>
                <Card.Text>{pet.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
      <div className="text-center mt-2">
        <p>Total Pages: {totalPages}</p>
        <p>Total Pets: {totalPets}</p> {/* Display total number of pets */}
      </div>
    </Container>
  );
};

export default PetProfile;
    