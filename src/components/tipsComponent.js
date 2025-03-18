import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import manCleaning from "../images/man-cleaning.jpg";
import "../css/tipsComponent.css";
import "../css/HomeDemoCss.css"
function TipsComponent() {
  return (
    <div className="back-baby-blue">
      <Container fluid>
        <Row>
          <Col className="flex flex-column justify-content-center pad-3rem order-text" lg={6}>
            <div className="fs-60px fw-bold main-color">
              How to Declutter & Minimize
            </div>
            <Row className="mt-5">
              <Col className="fw-500 main-color fs-4">
                Empower yourself with professional knowledge and jump on the
                minimalism bandwagon - it's easy!
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <div className="fw-400 main-color fs-4">
                  Unlock the secrets to a pristine home with expert tips from
                  our cleaning professionals. We share valuable advice,
                  techniques, and insider knowledge to help you reclaim your
                  space.
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col sm={8}>
                <Button className="book-now-button fw-bold">Book Now</Button>
              </Col>
            </Row>
          </Col>
          <Col className="p-0 order-photo" lg={6}>
            <Image src={manCleaning} fluid className="h-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default TipsComponent;
