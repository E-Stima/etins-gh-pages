import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './Images/ESM-500-610.png';
import Image from 'react-bootstrap/image';


const NavbarComponent = () => {
  const stylesNav = {
    marginLeft: '150px',
    padding: '20px',
    
  }
    return ( 
        <Navbar bg="trans" expand="lg" >
      <Container className='container-fluid' fluid style={{ position: "relative", zIndex: "50" }}>
        <Navbar.Brand href="#home"> 
              <Image src={logo} style={{maxWidth : '50px'}}/>    
              <p className='darkHeading navHead'>ESM Media</p>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={stylesNav}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Rentals
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Consultancy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Prices
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}
 
export default NavbarComponent;