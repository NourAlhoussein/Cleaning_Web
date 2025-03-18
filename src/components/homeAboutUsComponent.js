import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import cleaningGirl from "../images/cleaningGirl.jpg";
import "../css/HomeAboutUsComponent.css";
function homeAboutUsComponent() {
  return (
    <div className="home-about-back">
      <Container fluid>
        <Row>
          <Col className="p-0" lg={6}>
            <Image src={cleaningGirl} fluid className="h-100"/>
          </Col>
          <Col className="pad-3rem" lg={6}>
            <div className="fs-60px fw-bold main-color">About Us</div>
            <Row className="mt-5">
              <Col sm={6}>
                <div className="fw-500 main-color fs-4">Qualified Team</div>
                <div className="gray-color fw-500 mt-1">
                  Our team is made up of dedicated professionals who take pride
                  in their work
                </div>
              </Col>
              <Col sm={6} className="mt-small-size">
                <div className="fw-500 main-color fs-4">Our Mission</div>
                <div className="gray-color fw-500 mt-1">
                  We believe that a clean environment is the foundation for a
                  happy, healthy life
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col sm={6}>
                <div className="fw-500 main-color fs-4">Outstanding Support</div>
                <div className="gray-color fw-500 mt-1">
                  Your satisfaction is our priority, and we go beyond to ensure
                  you have a seamless, stress-free experience
                </div>
              </Col>
              <Col sm={6} className="mt-small-size">
                <div className="fw-500 main-color fs-4">Same Day Availability</div>
                <div className="gray-color fw-500 mt-1">
                  With our same day availability, book a cleaning service on
                  short notice
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
                <Col sm={6}>
                <Button className="learn-button">Learn more</Button></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default homeAboutUsComponent;
