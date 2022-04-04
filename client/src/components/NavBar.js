import React, {useContext} from 'react';
import {Context} from "../index";
import {Link} from "react-router-dom";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <div>
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
        </div>
    );
};

export default NavBar;