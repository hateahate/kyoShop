import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";
class SideNav extends React.Component {
      render() {
        return (
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
        );
      }
}

export default SideNav