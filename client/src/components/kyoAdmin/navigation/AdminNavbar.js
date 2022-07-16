import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AdminNavbar() {
    return (
        <Navbar bg="light">
            <Navbar.Brand href="#home">kyoShop | Admin Panel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Website</Nav.Link>
                    <NavDropdown title="About system" id="basic-nav-dropdown">
                        <NavDropdown.Item>kyoShop ver. 0.9</NavDropdown.Item>
                        <NavDropdown.Item href="dejikyo.com">
                            Developer website
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AdminNavbar;