import React, { useState } from 'react';
import styled from 'styled-components';
import SideNav from "./subComponents/SideNav"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import AdminProducts from './SubPages/AdminProducts';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const PageBody = styled.div`
 
`

const Admin = () => {
    return (
        <div>
            <Page>
                <PageBody>
                    <Tab.Container id="left-tabs" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <SideNav />
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <AdminProducts />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </PageBody>
            </Page>
        </div>
    )
}
export default Admin