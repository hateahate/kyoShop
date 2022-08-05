import React, { useEffect } from "react";
import AdminUI from "../../Ui/AdminUI";
import { Editor } from 'react-draft-wysiwyg';
import { useState } from "react";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { createPost, decodePostBody, encodePostBody } from "../../../../api/postAPI";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { convertToRaw } from "draft-js";

// Стилизованные компоненты
const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`;

const AddPost = () => {

    // States
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState('');
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');
    const [rawData, setRaw] = useState(null);


    // SEO url generator
    useEffect(() => {
        let result = title.replace(/\s+/g, '-').toLowerCase();
        setLink(result)
    }, [title])

    // Editor state handler
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        let i = encodePostBody(editorState)
        console.log(decodePostBody(i))
    }


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addPost = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', JSON.stringify(convertToRaw(editorState.getCurrentContent())))
        formData.append('link', link)
        createPost(formData).then((data) => {
            if (data == true) {
                console.log(data)
                NotificationManager.success(`Post "${title}" successfully created`, 'Success')
            }
            else {
                NotificationManager.error(`Post "${title}" cannot be created`, `${data}`);
            }
        })
    }

    return (
        <AdminUI>
            <NotificationContainer />
            <h1>Add new post</h1>
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>Title</Card.Header>
                                <Card.Body>
                                    <Form.Control aria-label="large"
                                        value={title}
                                        onChange={e => setTitle(String(e.target.value))}
                                        placeholder="Post title"
                                        type="text"
                                    />
                                </Card.Body>
                                <Card.Footer />
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>SEO Url</Card.Header>
                                <Card.Body>
                                    <Form.Control aria-label="large"
                                        value={link}
                                        onChange={e => setTitle(String(e.target.value))}
                                        placeholder="Post title"
                                        type="text"
                                        disabled
                                    />
                                </Card.Body>
                                <Card.Footer />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Form>
            <Card>
                <Card.Header>Editor</Card.Header>
                <Card.Body>
                    <Editor editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange} />
                </Card.Body>
                <Card.Footer><Button variant="success" onClick={addPost}>Add</Button></Card.Footer>
            </Card>
        </AdminUI>
    )
}

export default AddPost