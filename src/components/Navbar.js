import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../img/cat.jpg'; // Update the path to your logo

const NavigationBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="Brand Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    Country Explorer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/help">Help</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;

