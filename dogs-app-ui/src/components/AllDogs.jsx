import React, { useEffect, useState } from 'react'
import { getAllDogs } from '../services/dogs-service';
import Row from "react-bootstrap/Row";
import DogDetails from './DogDetails';
function AllDogs() {

    const [dogs, setDogs] = useState([]);
    useEffect(() => {getDogsFromTheApi()}, []);
    const getDogsFromTheApi = () => {
        getAllDogs()
        .then((data) => {
            setDogs(data.data);
        })
        .catch(err => {
            setDogs([]);
            console.log(err);
        })
    }

    return (
        <>
      {/* <h1> Total count is: {total}</h1> */}
      <Row>
        {dogs.map((dog) => (
          <div className="container" key={dog.id.toString()}>
            <DogDetails info={dog}  />
          </div>
        ))}
      </Row>
    </>
    )
}

export default AllDogs