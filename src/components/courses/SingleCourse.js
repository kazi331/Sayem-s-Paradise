import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./singleCourse.css";

const SingleCourse = ({ course }) => {
  const { title, picture, description, fee, id } = course;
  return (
    <div className="col-12 col-md-6 col-lg-4 g-4">
      <Card>
        <Card.Img variant="top" src={`${picture}.jpg`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="button-fee">
            <Link to={`/checkout/${id}`} className="btn btn-outline-secondary">
              Enroll Now
            </Link>
            <span>{fee}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCourse;
