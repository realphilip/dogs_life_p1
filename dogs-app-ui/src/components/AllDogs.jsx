import React, { useEffect, useState } from "react";
import { getAllDogs, getNumberOfDogs } from "../services/dogs-service"; 
import Row from "react-bootstrap/Row";
import DogDetails from "./DogDetails";

function AllDogs() {
  const [dogs, setDogs] = useState([]);
  const [totalDogs, setTotalDogs] = useState(0);

  useEffect(() => {
    fetchTotalDogs();
    getDogsFromTheApi();
  }, []);

  const fetchTotalDogs = () => {
    getNumberOfDogs()
      .then((response) => {
        setTotalDogs(response.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDogsFromTheApi = () => {
    getAllDogs()
      .then((response) => {
        setDogs(response.data); 
      })
      .catch((err) => {
        setDogs([]);
        console.log(err);
      });
  };

  return (
    <>
      <h1>Total number of dogs: {totalDogs}</h1>
      <Row>
        {dogs.map((dog) => (
          <div className="container" key={dog.id.toString()}>
            <DogDetails info={dog} />
          </div>
        ))}
      </Row>
    </>
  );
}

export default AllDogs;
