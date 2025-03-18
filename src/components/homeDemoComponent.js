import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/HomeDemoCss.css";
function homeDemoComponent() {
  return (
    <div>
      <div className="Home-page mt-5"></div>
      <div className="black-back mt-5"></div>
      <div className="content-home">
        <Container>
          <Row>
            <Col className="color-white fs-4 fw-500">
              Reliable house cleaning professionals
            </Col>
          </Row>
          <Row>
            <Col className="color-white fw-bold fs-100px mt-3">
              Consider it Done
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6} xs={8}>
              <Button className="home-button-style">Book Now</Button>
            </Col>
          </Row>
        </Container>
        <div className="white-line"></div>
        <Container>
          <Row>
            <Col className="d-flex align-items-center col-p-10px" sm={6}>
              <div className="color-white fw-400 fs-5 w-100 px-1">
                We understand that maintaining a spotless home can be a
                challenge in the hustle and bustle of daily life. That’s why
                we’ve made it our specialty to know the ins and outs of house
                cleaning, so you don’t have to.
              </div>
              <div className="white-line-vertical"></div>
            </Col>
            <div className="white-line-h"></div>
            <Col className="d-flex align-items-center col-p-10px" sm={2}>
              <div className="color-white fs-60px fw-bold w-100">
                20 <span className="d-block mt-minus-20">+</span>
                <span className="fs-6 fw-500 d-block">qualified workers</span>
              </div>
              <div className="white-line-vertical"></div>
            </Col>
            <div className="white-line-h"></div>
            <Col className="d-flex align-items-center col-p-10px" sm={2}>
              <div className="color-white fs-60px fw-bold w-100">
                <span>4.8</span>
                <span className="fs-6 fw-500 d-block">our average rating</span>
              </div>
              <div className="white-line-vertical"></div>
            </Col>
            <div className="white-line-h"></div>
            <Col className="d-flex align-items-center col-p-10px" sm={2}>
              <div className="color-white fs-60px fw-bold w-100">
                5 <span className="d-block mt-minus-20">years</span>
                <span className="fs-6 fw-500 d-block">on the market</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default homeDemoComponent;
