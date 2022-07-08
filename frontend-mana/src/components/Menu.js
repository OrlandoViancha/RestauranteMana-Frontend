import React from 'react'
import {Navbar,Container,Nav,Form,Row,Col} from "react-bootstrap"
import logo from '../img/manatwo.jpg'
export const Menu = () => {
  return (
    <Navbar className="bg-light navbar navbar-dark bg-primary " collapseOnSelect="true" role="navigation" bg="blue" expand="md" style={
      {
        
        fontSize:'16px',
        
      }
    }>
      <Container fluid>
      <Navbar.Brand  style={{backgroundImage:''}} href="/homedolcedelizia">
          <img src={logo} alt="logo" style={{width:'50px'}}/>
          <b style={{color:'black'}}>     EL MANA</b></Navbar.Brand>
        <Navbar.Toggle aria-controls=" basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{widthmax:'100%',}}>
          <Row style={{margin:'auto', marginLeft:'50px'}}>
          <Nav
            className="mr-auto me-auto "
            style={{ maxHeight: '250px',  }}
            navbarScroll
          >
            <Col lg={4}>
            <Nav.Link href="/home"><b style={{color:'black'}}>INICIO</b></Nav.Link>
            </Col>
            <Col lg={6}>
            <Nav.Link href="/" style={{color:'black'}}><b>QUIENES SOMOS</b></Nav.Link>
            </Col>
            <Col lg={5}>
            <Nav.Link href="/" style={{color:'black'}}><b>CONTACTANOS</b></Nav.Link>
            </Col>
           

           
           
          </Nav>
          </Row>
          <nav>
          
          <Form className="d-flex" style={{margin:'default'}} >
          <Col lg={4}>

          <Nav.Link href="/login">
          <button type="button" className="btn btn-primary" ><b>Login</b></button>
          </Nav.Link>
          </Col>
          </Form>
        
          </nav>

          <Nav>
            

                            
              <a href="/carrito" id="carrito_logout"></a> 


            
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};


