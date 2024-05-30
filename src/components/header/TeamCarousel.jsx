import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';


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
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function TeamCarousel() {
  return (
    <div className="container-fluid py-5">
      <Container>
        <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
          <h6 className="text-primary text-uppercase">Team Members</h6>
          <h1 className="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {teamMembers.map((member, index) => (
            <div className="team-item p-3" key={index}>
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src={member.image} alt={member.name} />
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">{member.name}</h5>
                <p className="m-0">{member.designation}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default TeamCarousel;
