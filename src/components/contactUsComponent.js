import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/ContactUsComponent.css";
function contactUsComponent() {
  return (
    <div className="bg-contact-color p-larg-size">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="fs-1 fw-bold main-color">Book Now</div>
            <div className="fs-5 second-color mt-3">
              Ready to experience a cleaner, more refreshing space? Scheduling
              your next cleaning service is quick and easy. Our team will arrive
              promptly and provide the top-quality service you deserve. Your
              spotless home is just a few clicks away!
            </div>
            <div className="fs-4 fw-500 main-color mt-5">Contacts</div>
            <div className="fs-5 second-color mt-2">email@gmail.com</div>
            <div className="fs-5 second-color mt-2">
              519 Meadow Lane, Fort Lysanne 77091
            </div>
            <div className="fs-5 second-color mt-2">+123-456-7890</div>
          </Col>
          <Col lg={6} className="mt-contact">
            <Row>
              <Col md={6}>
                <Row className="pr-10px">
                  <label htmlFor="">FULL NAME</label>
                  <input type="text" placeholder="Enter your full name" />
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Enter your email" />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <label htmlFor="">PHONE NUMBER</label>
                  <input
                    type="number"
                    placeholder="
                +123"
                  />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <label htmlFor="">MESSAGE</label>
                  <textarea type="number" placeholder="Enter your message" />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="p-0px-meduim">
                <Button className="button-contact-submit fw-bold fs-5">Submit</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default contactUsComponent;
