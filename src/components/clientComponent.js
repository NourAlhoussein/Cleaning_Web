import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../css/clientsComponent.css"
function ClientComponent(props) {
    const { client } = props;
  return (
    <Card className="card-client-style">
      <Card.Header className="card-header-style">
        <Row>
          <Col className="flex justify-content-center" lg={3}>
            <Image className="client-photo" src={client.photo} fluid/>
          </Col>
          <Col className="flex align-items-center justify-content-center main-color fs-4 mt-name-small" lg={7}>
            <div>{client.name}</div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Text className="gray-color mt-1 fs-5">{client.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ClientComponent;
