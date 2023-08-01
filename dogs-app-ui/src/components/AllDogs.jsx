import React, { useEffect, useState } from 'react'
import { getAllDogs } from '../services/dogs-service';

function AllDogs() {

    const [dogs, setDogs] = useState([]);
    useEffect(() => {getDogsFromTheApi()}, []);
    const getDogsFromTheApi = () => {
        getAllDogs()
        .then((data) => {
        console.log(data);
        })
        .catch(err => {
            setDogs([]);
            console.log(err);
        })
    }

    return (
        <div>AllDogs</div>
    )
}

export default AllDogs