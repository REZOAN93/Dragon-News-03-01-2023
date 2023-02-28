import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import img1 from "../../../Asstes/1.JPG";
import img2 from "../../../Asstes/2.JPG";
import img3 from "../../../Asstes/3.JPG";

const Rightsidenave = () => {
  return (
    <div>
      <div className="mb-5">
        <Button className="w-100 mb-2" variant="outline-secondary">
          <FcGoogle className="me-2" />
          LogIn Google
        </Button>{" "}
        <Button className="w-100" variant="outline-secondary">
          <ImGithub className="me-2" />
          LogIn GitHub
        </Button>{" "}
      </div>
      <div className="mb-5">
        <h6>Find us On:</h6>
        <ListGroup>
          <ListGroup.Item>
            <BsFacebook className="me-1" /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaLinkedin className="me-1" /> LinkedIn
          </ListGroup.Item>
          <ListGroup.Item>
            <SiGmail className="me-2" />
            Gmail
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              id="img-resize"
              className="d-block w-100 h-75"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="img-resize"
              className="d-block w-100 h-75"
              src={img3}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="img-resize"
              className="d-block w-100 h-75"
              src={img2}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Rightsidenave;
