import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import CreateProduct from '../modals/CreateProduct';
import CreateCategory from '../modals/CreateCategory';
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Button, Container } from 'react-bootstrap';
import AdminProducts from '../products/Products';
import styled from 'styled-components';
import AdminNavbar from './AdminNavbar';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ProductsRenderContainer = styled.div`

`;


function AdminUI() {
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);
    return (
        <Page>
            <AdminNavbar />
            <Tab.Container id="left-tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first" href="#">
                                    Products
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" href="#">
                                    Posts
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Button variant={'primary'} className='mt-2' onClick={() => setCategoryVisible(true)}>Category</Button>
                                <Button variant={'primary'} className='mt-2' onClick={() => setProductVisible(true)}>Product</Button>
                                <AdminProducts />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)} />
                <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
            </Tab.Container>
        </Page>
    );
}

export default AdminUI;