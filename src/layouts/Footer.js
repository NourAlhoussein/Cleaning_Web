import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/FooterCss.css";
import logo from "../images/footer-logo.png";
function MainFooter() {
  return (
    <div className="main-bg-color p-70px">
      <Container>
        <Row>
          <Col
            lg={4}
            className="flex flex-row justify-content-center align-items-center"
          >
            <Image src={logo} fluid />
            <div className="flex fw-bold px-1 fs-3 white-color">Clean-X</div>
          </Col>
          <Col
            lg={4}
            className="flex flex-row justify-content-center align-items-center item-dis-none"
          >
            <div className="px-2 white-color cursor-pointer">Home</div>
            <div className="px-2 white-color cursor-pointer">Services</div>
            <div className="px-2 white-color cursor-pointer">About</div>
            <div className="px-2 white-color cursor-pointer">Contact</div>
          </Col>
          <Col
            lg={4}
            className="flex flex-row justify-content-center align-items-center"
          >
            <div className="white-color mt-small-sise">
              All Rights Reserved | Company Name
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MainFooter;
