import React, { useEffect } from "react";
import AdminUI from "../../Ui/AdminUI";
import { Editor } from 'react-draft-wysiwyg';
import { useState } from "react";
import { EditorState } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { fetchCategories } from "../../../../api/productAPI";
import { createPost, decodePostBody, fetchOnePost, updatePost, encodePostBody, htmlPostBody } from "../../../../api/postAPI";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { useParams } from 'react-router-dom';
import { getUserById } from "../../../../api/userAPI";

// Styled components
const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`;




const EditUser = () => {

    const { id } = useParams()

    // States
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    // Load Data
    useEffect(() => {
        getUserById(id).then((data) => {
            setFirstName(data.first_name)
            setLastName(data.last_name)
            setEmail(data.email)
            setRole(data.role)
            console.log(data)
        })
    }, [])

    return (
        <AdminUI></AdminUI>
    )
}

export default EditUser