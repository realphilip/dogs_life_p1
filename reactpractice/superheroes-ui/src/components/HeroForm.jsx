import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import { saveHero } from '../services/hero-service';

const HeroForm = () => {
    const [alias, setAlias] = useState('');
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [teamID, setTeamID] = useState(0);

    const handleAliasChange = (event)=> {
        setAlias(event.target.value);
    }

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }

    const handleSuperpowerChange = (event)=>{
        setSuperpower(event.target.value)
    }

    const handleTeamChange = (event)=>{
        setTeamID(event.target.value)
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        let hero = {};
        hero.alias = alias;
        hero.name = name;
        hero.superpower = superpower;
        hero.teamID = teamID;
        saveHero(hero)
          .then(res => {
             setSuperpower('');
             setAlias('');
             setName('');
             setTeamID(0)
             })
           .catch(err=>{
              console.log(err);
             })   
    }

  

    return (
        <Row className='heroForm'>
            <Form >
                <Form.Group className="mb-3" controlId="alias">
                    <Form.Label>Hero Alias: </Form.Label>
                    <Form.Control type="text" placeholder="Hero alias" value={alias}
                    onChange={handleAliasChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Hero Name: </Form.Label>
                    <Form.Control type="text" placeholder="Hero name" value={name}
                    onChange={handleNameChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Superpower">
                    <Form.Label>Hero Superpower: </Form.Label>
                    <Form.Control type="text" placeholder="Hero Superpower" value={superpower}
                    onChange={handleSuperpowerChange} />
                </Form.Group>
                <Form.Select aria-label="Team ID" value={teamID}
                onChange={handleTeamChange}>
                    <option>Team ID</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Row>
    )
}

export default HeroForm