import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsChatSquareQuote } from 'react-icons/bs';

const testimonials = [
  {
    imgSrc: 'images/testimonial-1.jpg',
    text: 'I have wanted a dog for my entire adult life. But it was important to me to wait until I could really make it work with my busy lifestyle. After opening a new retail store I really wanted to have a shop dog, meaning a dog that could come with me to work every day and be social with my customers, yet calm and well behaved',
    name: 'Ray',
    designation: 'Pet Parent',
  },
  {
    imgSrc: 'images/testimonial-2.jpg',
    text: 'I adopted a rescue dog that had been tested and selected by Mia at East Valley Shelter, and then fostered by Samantha. I needed a dog that was a good match for my running and walking hobby, and could also get along with a cat',
    name: 'Max',
    designation: 'Pet Parent',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialCarousel = () => {
  return (
    <div className="container-fluid testimonial py-5" style={{ margin: '45px 0' }}>
        <img className='testimonial-img' src='images/testimonial.jpg' alt='poster' />
      <Container className="py-5 poster-inner">
        <Row className="justify-content-end">
          <Col lg={7}>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-item text-center" key={index}>
                  <div className="position-relative mb-4">
                    <img className="img-fluid mx-auto" src={testimonial.imgSrc} alt="" />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <BsChatSquareQuote className="text-primary" />
                    </div>
                  </div>
                  <p>{testimonial.text}</p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase">{testimonial.name}</h5>
                  <span>{testimonial.designation}</span>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialCarousel;
