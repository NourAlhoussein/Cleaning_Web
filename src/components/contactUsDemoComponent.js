import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import MapComponent from "../components/mapComponent";
import "../css/AboutUsDemo.css";
import ContactPhoto from "../images/cleaningGirl.jpg";

function ContactUsDemoComponent() {
  return (
    <div>
      <div className="bg-contact-color">
        <Container fluid>
          <Row>
            <Col className="p-demo-text order-text" lg={6}>
              <div className="fw-bold fs-60px main-color">Get In Touch</div>
              <div className="fw-bold main-color mt-3">
                OUR LOVE FOR CLEANING COMES SHINING THROUGH
              </div>
              <div className="gray-color mt-3">
                We'll be happy to meet up and show you how we work.
                Alternatively, you're welcome to stop by our office and ask us
                any question you may have, or book us for a cleaning session.
              </div>
              <div className="fw-bold main-color mt-3">
                cleaningservices@gmail.com | 646 567 4567
              </div>
            </Col>
            <Col className="p-demo-contact order-photo" lg={6}>
              <Image src={ContactPhoto} fluid />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="h-450px">
        <MapComponent />
      </div>
    </div>
  );
}

export default ContactUsDemoComponent;
