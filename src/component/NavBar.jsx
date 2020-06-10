import React from 'react';
import {Navbar, Nav, Form, Button, FormControl, Image} from 'react-bootstrap'

const NavBar = () => (

    <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">
      <Image
      src = "https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
      style={{width: "100px", height:"30px"}}/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">TV Shows</Nav.Link>
      <Nav.Link href="#link">Movies</Nav.Link>
      <Nav.Link href="#link">Recenty Added</Nav.Link>
      <Nav.Link href="#link">My List</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

)


export default NavBar; 