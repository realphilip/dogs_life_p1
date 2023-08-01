import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getOwnerID } from "../services/dogs-service";
import { useEffect } from "react";

function DogDetails(props) {
  const [owner, setOwner] = useState(null);

  const getOwner = (id) => {
    getOwnerID(id)
      .then((data) => {
        setOwner(data.data); // Assuming data is an object containing the owner details
        console.log(data.data);
      })
      .catch((err) => {
        setOwner(null);
        console.log(err);
      });
  };

  return (
    <Card>
      <div className="imgContainer">
        <Card.Img variant="top" width="150px" />
      </div>
      <Card.Body>
        <Card.Title>Name: {props.info.name}</Card.Title>
        <Card.Text>Age: {props.info.age}</Card.Text>
        <Row>
          <Col>
            <Button onClick={() => getOwner(props.info.id)}>
              See the owner
            </Button>
          </Col>
          <Col></Col>
        </Row>
        {owner && (
          <div>
            <p>Owner Details:</p>
            <p>Owner ID: {owner}</p>
            <p>Name: {owner.name}</p>
            <p>Age: {owner.age}</p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default DogDetails;
