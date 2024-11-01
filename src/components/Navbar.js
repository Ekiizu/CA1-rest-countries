import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../css/Navbar.css'; //custom css

const NavigationBar = () => {
    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="text-white">
                    Country Explorer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className="ms-auto">
                        <NavDropdown title="More" id="basic-nav-dropdown" className="text-white">
                            <NavDropdown.Item as={Link} to="/credit" className="text-dark">Credit</NavDropdown.Item>
                            
                            <NavDropdown.Item as={Link} to="/secret" className="text-dark">Secret</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;


