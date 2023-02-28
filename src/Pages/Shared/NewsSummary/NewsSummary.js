import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./NewsSummary.css";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummary = (props) => {
  const { title, image_url, details, author, rating, total_view, _id } =
    props.news;
  return (
    <div>
      <Card className="text-left mb-3">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image
              className="me-3"
              roundedCircle
              id="author-img"
              src={author.img}
            ></Image>
            <div>
              <p className="mb-0">{author.name}</p>
              <p className="mb-0">{author.published_date}</p>
            </div>
          </div>
          <div>
            <FaBookmark className="me-2" />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className="mt-3">
            {details.length > 205 ? (
              <p>
                {details.slice(0, 250) + "...."}
                <Link id="details-info" to={`/news/${_id}`}> Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between ">
          <p className="mb-0 align-items-center">
            <FaStar className="text-warning" /> {rating.number}
          </p>
          <p className="mb-0 align-items-center">
            <FaEye /> {total_view}
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummary;
