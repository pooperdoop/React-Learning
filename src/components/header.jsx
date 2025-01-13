import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(){
    return(
        <Navbar expand="lg"  className="bg-dark " fixed='top'>
        <Container fluid>
          <Navbar.Brand className='title' >React Learning</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#basicJSX">Basic JSX import</Nav.Link>
              <Nav.Link href="#props">Props</Nav.Link>
              <Nav.Link href="#home">Basics</Nav.Link>
              <Nav.Link href="#link">Basics</Nav.Link>
               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> 
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    )
}

export default Header