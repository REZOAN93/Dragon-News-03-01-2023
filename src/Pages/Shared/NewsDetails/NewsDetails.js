import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./NewsDetails.css";

const NewsDetails = () => {
  const news = useLoaderData();
  const {
    title,
    image_url,
    details,
    author,
    rating,
    total_view,
    _id,
    category_id,
  } = news;
  return (
    <div>
      <Card className="mb-5">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link id="back-category" to={`/categories/${category_id}`}>
            Back To Category
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsDetails;
