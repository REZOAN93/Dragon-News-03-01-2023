import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";
import Leftsidenave from "../../Pages/Shared/Leftsidenave/Leftsidenave";
import Rightsidenave from "../../Pages/Shared/Rightsidenave/Rightsidenave";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="mt-3">
        <Row>
          <Col className="d-none d-lg-block" lg="2">
            <Leftsidenave></Leftsidenave>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
          <Col lg="2">
            <Rightsidenave></Rightsidenave>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
