import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DogForm from './components/DogForm'; // Make sure the path is correct
import AllDogs from "./components/AllDogs";

function App() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Dogs App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/alldogs">All Dogs</Nav.Link>
            <Nav.Link href="/dogForm">Dog form</Nav.Link>
            {/* <Nav.Link href="/addhero">Add Hero</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route path="alldogs" element={<AllDogs />} />
      <Route path="dogForm" element={<DogForm />} />
      {/* <Route path="addhero" element={<HeroForm />} />
      <Route path="/" element={<AllHeroes />} /> */}
    </Routes>
  </>
  );
}

export default App;
