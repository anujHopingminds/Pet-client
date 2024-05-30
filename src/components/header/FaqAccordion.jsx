import { Accordion, Card, Button, Container } from 'react-bootstrap';

function FaqAccordion() {
  return (
    <Container className="my-5">
      <div className="heading-section mb-5 mt-5 mt-lg-0">
        <h2 className="mb-3">Frequently Asked Questions</h2>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
          texts.
        </p>
      </div>
 
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How to train your pet dog?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Far far away, behind the word mountains</li>
              <li>Consonantia, there live the blind texts</li>
              <li>When she reached the first hills of the Italic Mountains</li>
              <li>Bookmarksgrove, the headline of Alphabet Village</li>
              <li>Separated they live in Bookmarksgrove right</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>How to manage your pets?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Far far away, behind the word mountains</li>
              <li>Consonantia, there live the blind texts</li>
              <li>When she reached the first hills of the Italic Mountains</li>
              <li>Bookmarksgrove, the headline of Alphabet Village</li>
              <li>Separated they live in Bookmarksgrove right</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>What is the best grooming for your pets?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Far far away, behind the word mountains</li>
              <li>Consonantia, there live the blind texts</li>
              <li>When she reached the first hills of the Italic Mountains</li>
              <li>Bookmarksgrove, the headline of Alphabet Village</li>
              <li>Separated they live in Bookmarksgrove right</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>What are those requirements for sitting pets?</Accordion.Header>
          <Accordion.Body>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
            ocean.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default FaqAccordion;
