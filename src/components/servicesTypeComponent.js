import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../css/ServicesDemoCss.css";
function servicesTypeComponent(props) {
  const { type } = props;
  return (
    <Card className="card-s-type">
      <Card.Header className="card-s-header">
        <Row>
          <Col>
            <Image src={type.photo} fluid />
          </Col>
        </Row>
      </Card.Header>
      <div className="line-card-type"></div>
      <Card.Body className="p-0">
        <div className="gray-color fs-5 mt-3">{type.serviceNum} Services</div>
        <Card.Title className="main-color mt-3 fs-3">{type.type}</Card.Title>
        <Card.Text className="gray-color fs-5 mt-3">{type.description}</Card.Text>
        <Button className="card-s-button mt-2">Book Now</Button>
      </Card.Body>
    </Card>
  );
}
export default servicesTypeComponent;
