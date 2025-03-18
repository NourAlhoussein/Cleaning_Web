import React from "react";
import { Container, Row, Col, Image,Button } from "react-bootstrap";
import "../css/HomeServices.css";
import HomeCleaning from "../images/homeCleaning.jpg";
import Ironing from "../images/ironing.jpg";
import OfficeCleaning from "../images/officeCleaning.jpg";
import CarWaching from "../images/carWaching.jpg";
function homeServicesComponent() {
  return (
    <div className="home-services-back">
      <Container>
        <Row>
          <Col className="main-color fw-bold fs-60px mt-5">Our Services</Col>
        </Row>
        <Row>
          <Col className="gray-color fs-5 mt-3" lg={8}>
            Explore our range of specialized cleaning services designed to meet
            your every need. Whether it’s your home, office, or a specific area
            that needs attention, we provide expert care for every corner.
          </Col>
        </Row>
      </Container>
      <Container className="mt-5" fluid>
        <Row>
          <Col className="pos-relative card-s-pad">
            <div className="color-white fw-bold card-services-title">
              House Cleaning
            </div>
            <Image className="hover-card-s" src={HomeCleaning} fluid />
          </Col>
          <Col className="pos-relative card-s-pad">
            <div className="color-white fw-bold card-services-title">
              Ironing
            </div>
            <Image className="hover-card-s" src={Ironing} fluid />
          </Col>
        </Row>
        <Row className="card-s-mt">
          <Col className="pos-relative card-s-pad">
            <div className="color-white fw-bold card-services-title">
              Office Cleaning
            </div>
            <Image className="hover-card-s" src={OfficeCleaning} fluid />
          </Col>
          <Col className="pos-relative card-s-pad">
            <div className="color-white fw-bold card-services-title">
              Car Waching
            </div>
            <Image className="hover-card-s" src={CarWaching} fluid />
          </Col>
        </Row>
      </Container>
      <div className="back-baby-blue mt-3 p-4">
        <Container>
          <Row>
            <Col sm={8}>
              <div className="main-color fs-1 fw-500 align-center-small">Explore All Services</div>
              <div className="main-color fs-5 mt-3 align-center-small">
                Discover our tailored cleaning services that fit your unique
                needs
              </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center" sm={4}>
              <Button className="discover-button">Discover all</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default homeServicesComponent;
