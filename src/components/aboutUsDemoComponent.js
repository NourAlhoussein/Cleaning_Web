import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/AboutUsDemo.css";
import aboutPhoto from "../images/cleaningGirl.jpg";
import { MdMoreTime } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TiStarburstOutline } from "react-icons/ti";
import { GiStarFormation } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";

function aboutUsDemoComponent() {
  return (
    <div>
      <div className="bg-contact-color">
        <Container fluid>
          <Row>
            <Col className="p-demo-text order-text" lg={6}>
              <div className="fw-bold fs-60px main-color">
                We Live & Breath Cleanliness
              </div>
              <div className="fw-bold main-color mt-3">
                OUR LOVE FOR CLEANING COMES SHINING THROUGH
              </div>
              <div className="gray-color mt-3">
                Simplify your life with our easy and flexible cleaning options.
                Enjoy a pristine space - whether it's your home or office.
              </div>
            </Col>
            <Col className="p-demo-about order-photo" lg={6}>
              <Image src={aboutPhoto} fluid />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-back-2">
        <Container>
          <Row>
            <Col
              className="flex flex-column justify-content-center p-5 text-center main-color fs-5 fw-500"
              xl={3}
              lg={6}
              md={6}
              sm={6}
              xs={12}
            >
              <h1>
                <VscWorkspaceTrusted />
              </h1>
              <div>Trusted by 1000s of Customers</div>
            </Col>
            <Col
              className="flex flex-column justify-content-center p-5 text-center main-color fs-5 fw-500"
              xl={3}
              lg={6}
              md={6}
              sm={6}
              xs={12}
            >
              <h1>
                <TiStarburstOutline />
              </h1>
              <div>Friendly & ﻿Professional</div>
            </Col>
            <Col
              className="flex flex-column justify-content-center p-5 text-center main-color fs-5 fw-500"
              xl={3}
              lg={6}
              md={6}
              sm={6}
              xs={12}
            >
              <h1>
                <GiStarFormation />
              </h1>
              <div>Premium Cleaning ﻿Materials</div>
            </Col>
            <Col
              className="flex flex-column justify-content-center p-5 text-center main-color fs-5 fw-500"
              xl={3}
              lg={6}
              md={6}
              sm={6}
              xs={12}
            >
              <h1>
                <MdMoreTime />
              </h1>
              <div>On Time, Every Time</div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="p-40px">
          <Col lg={4}>
            <div className="fw-bold fs-60px main-color">Why Choose Us?</div>
          </Col>
          <Col lg={4}>
            <div className="d-flex flex-row fw-500 main-color fs-5 p-3">
              <h3 className="pr-10px">
                <AiOutlineCheck />
              </h3>
              More than 20 years of professional cleaning experience
            </div>
            <div className="d-flex flex-row fw-500 main-color fs-5 p-3">
              <h3 className="pr-10px">
                <AiOutlineCheck />
              </h3>
              Friendly service and competitive rates
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex flex-row fw-500 main-color fs-5 p-3">
              <h3 className="pr-10px">
                <AiOutlineCheck />
              </h3>
              Team of cleaners who love their job
            </div>
            <div className="d-flex flex-row fw-500 main-color fs-5 p-3">
              <h3 className="pr-10px">
                <AiOutlineCheck />
              </h3>
              Excellent reviews and many return customers
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default aboutUsDemoComponent;
