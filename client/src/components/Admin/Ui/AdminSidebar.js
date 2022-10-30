import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = styled(Link)`
color: white;
text-decoration: none;
&:hover{
    color: white;
}
`

function AdminSidebar() {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">kyoShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark" />
                <Navbar.Collapse id="navbar-dark kyoadmin-nav">
                    <Nav>
                        <Nav.Link><CustomLink to='/admin/'>Dashboard</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to='/tickets/'>Tickets</CustomLink></Nav.Link>
                        <NavDropdown
                            id="nav-dropdown-products"
                            title="Products"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item><CustomLink to='/admin/products'>See all products</CustomLink></NavDropdown.Item>
                            <NavDropdown.Item><CustomLink to='/admin/products/categories'>Categories</CustomLink></NavDropdown.Item>
                            <NavDropdown.Item><CustomLink to='/admin/attributes'>View attributes</CustomLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <CustomLink to='/admin/products/add'>Add new product</CustomLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            id="nav-dropdown-posts"
                            title="Posts"
                            menuVariant='dark'
                        >
                            <NavDropdown.Item><CustomLink to='/admin/posts'>See all posts</CustomLink></NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item><CustomLink to='/admin/posts/add'>Add new post</CustomLink></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            id="nav-dropdown-posts"
                            title="Wiki"
                            menuVariant='dark'
                        >
                            <NavDropdown.Item><CustomLink to='/admin/wiki'>See all posts</CustomLink></NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item><CustomLink to='/admin/wiki/add'>Add new post</CustomLink></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            id="nav-dropdown-posts"
                            title="Users"
                            menuVariant='dark'
                        >
                            <NavDropdown.Item><CustomLink to='/admin/users'>See all users</CustomLink></NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item><CustomLink to='/admin/'>Add new user</CustomLink></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AdminSidebar;