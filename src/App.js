import React from 'react';
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"
import Gallery from "./component/Gallery"
//import Home from "./component/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap'






function App() {
  return (
    <div className="App">
     <NavBar/>
      
     <Container fluid className="px-4">
      <Row className = "justify-content-between">
        <Col className = "d-flex">
        <h2 className = "mb-4">TV Shows</h2>
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="drowpdown-basic"
            className="btn btn sm dropdown-toggle rounded-0 ml-3"
            style={{backgroundColor: "#221f1f" }}
            
          >
          Genre
          </Dropdown.Toggle>
        <Dropdown.Menu className ="bg-dark">
        <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
       </Dropdown.Menu>
       </Dropdown>

        </Col>
      </Row>
     </Container>

     <Gallery/>
     <Gallery/>
     <Footer/>
    </div>
  );
}

export default App;
