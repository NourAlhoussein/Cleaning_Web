import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServicesTypeComponent from "../components/servicesTypeComponent";
import servicesType from "../data/servicesType";
import "../css/ServicesDemoCss.css";
function servicesDemoComponent() {
  const types = servicesType.slice(0, 4);
  const rightType = types.slice(0, 2);
  const leftType = types.slice(2);
  return (
    <div className="bg-contact-color">
      <Container>
        <Row className="p-demo">
          <Col xl={4}></Col>
          <Col xl={8}>
            <div className="fs-60px fw-bold main-color">
              Transform Your Space with Our Cleaning Expertise
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="pb-5">
        <Row className="mt-5">
          <Col xl={4} md={0}></Col>
          {rightType.map((type) => (
            <Col key={type.id} xl={4} md={6}>
              <ServicesTypeComponent type={type} />
            </Col>
          ))}
        </Row>
        <Row className="mt-3">
          {leftType.map((type) => (
            <Col key={type.id} xl={4} md={6}>
              <ServicesTypeComponent type={type} />
            </Col>
          ))}
        </Row>
        <Col xl={4} md={0}></Col>
      </Container>
    </div>
  );
}
export default servicesDemoComponent;
