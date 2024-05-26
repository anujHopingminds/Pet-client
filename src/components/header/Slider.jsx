import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

function Slider() {
  const teamMembers = [
    {
      name: 'John Doe',
      designation: 'CEO',
      image: 'images/team-1.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Designer',
      image: 'images/team-2.jpg',
    },
    {
      name: 'Michael Johnson',
      designation: 'Developer',
      image: 'images/team-3.jpg',
    },
    {
      name: 'Emily Brown',
      designation: 'Manager',
      image: 'images/team-4.jpg',
    },
    {
      name: 'David Lee',
      designation: 'Marketing',
      image: 'images/team-5.jpg',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Container className="my-5">
        <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
          <h6 className="text-primary text-uppercase">Team Members</h6>
          <h1 className="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
        </div>
        <Carousel  responsive={responsive}>
          {teamMembers.map((member, index) => (
            <Carousel.Item key={index} className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src={member.image} alt={member.name} />
                
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">{member.name}</h5>
                <p className="m-0">{member.designation}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}






export default Slider
