import React, { useContext } from 'react';
import { Context } from "../index";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavBarContainer = styled.div`
width: 100%;
`;

const NavBar = () => {
    const { user } = useContext(Context)
    return (
        <NavBarContainer>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/admin">admin</Link>
            </li>
            <li>
                <Link to="/shop">shop</Link>
            </li>
            <li>
                <Link to="/login">login</Link>
            </li>
            <li>
                <Link to="/registration">Registration</Link>
            </li>
            <li>
                <Link to="/ui-kit">UI-Kit</Link>
            </li>
        </NavBarContainer>
    );
};

export default NavBar;