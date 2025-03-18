import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ClientComponent from "../components/clientComponent";
import clientsArray from "../data/clientsArray";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function ClientsComponent() {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="fs-60px fw-bold main-color">Happu Clients</div>
            <div className="gray-color mt-2 fs-5">
              We’re proud to have earned glowing reviews from clients who love
              the quality and care we bring to every cleaning. Our reviews
              reflect the trust and confidence our clients place in us
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-3" fluid>
        <Row>
          <Swiper className="p-3"
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {clientsArray.map((client) => (
              <SwiperSlide key={client.id}>
                <ClientComponent client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
}
export default ClientsComponent;
