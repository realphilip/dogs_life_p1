import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

const DogForm = () => {
    const [dogId, setDogId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [ownerId, setOwnerId] = useState(0);

    const handleDogIdChange = (event)=> {
        setDogId(event.target.value);
    }

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }

    const handleAgeChange = (event)=>{
        setAge(event.target.value)
    }

    const handleOwnerIdChange = (event)=>{
        setOwnerId(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        let dog = {};
        dog.dog_id = dogId;
        dog.name = name;
        dog.age = age;
        dog.owner_id = ownerId;
    
        fetch('http://localhost:8080/dogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dog),
        })
        .then((response) => response.json())
        .then((data) => {
            setDogId(0);
            setName('');
            setAge(0);
            setOwnerId(0);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <Row className='dogForm'>
            <Form >
                <Form.Group className="mb-3" controlId="dogId">
                    <Form.Label>Dog ID: </Form.Label>
                    <Form.Control type="number" placeholder="Dog ID" value={dogId}
                    onChange={handleDogIdChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Dog Name: </Form.Label>
                    <Form.Control type="text" placeholder="Dog name" value={name}
                    onChange={handleNameChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="age">
                    <Form.Label>Dog Age: </Form.Label>
                    <Form.Control type="number" placeholder="Dog age" value={age}
                    onChange={handleAgeChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ownerId">
                    <Form.Label>Owner ID: </Form.Label>
                    <Form.Control type="number" placeholder="Owner ID" value={ownerId}
                    onChange={handleOwnerIdChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Row>
    )
}

export default DogForm
