import React from 'react'
import { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

function DogDetails(props) {
    return (
        <Card>
          <div className="imgContainer">
            <Card.Img
              variant="top"
              //src={images[props.info.alias.replaceAll(/\s/g, "")]}
              width="150px"
            />
          </div>
          <Card.Body>
            <Card.Title>Name: {props.info.name}</Card.Title>
            <Card.Text>Age: {props.info.age}</Card.Text>
            <p>dasnjafj</p>
            {/* <Row>
              <Col>
                <Button variant="primary" onClick={incrementCounter}>
                  Like
                </Button>
              </Col>
              <Col> {counter > 0 && <Card.Text>Likes: {counter}</Card.Text>}</Col>
            </Row> */}
          </Card.Body>
        </Card>
      );
    };


export default DogDetails