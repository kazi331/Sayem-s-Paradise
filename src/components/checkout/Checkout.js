import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch(`/course/${id}.json`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  const { title, description, fee, cover, name } = course;
  return (
    <div className="py-4 my-4 ">
      <h2 className="pt-4 text-center">Checkout</h2>
      <hr className="w-75 mx-auto mb-4" />

      <div className="row container mx-auto">
        <Card className="col-12 w-75 mx-auto">
          <Card.Img variant="top" className="w-100 m-0" src={cover} />
          <Card.Body className="m-4">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Fee: {fee}</Card.Text>
            <Card.Text>Instructor: {name}</Card.Text>
          </Card.Body>
        </Card>
        <div className="col-12 w-75 mx-auto my-4">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary">Confirm Buy</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
