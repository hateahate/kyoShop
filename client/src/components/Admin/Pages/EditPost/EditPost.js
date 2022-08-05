import React, { useEffect } from "react";
import AdminUI from "../../Ui/AdminUI";
import { Editor } from 'react-draft-wysiwyg';
import { useState } from "react";
import { EditorState } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { createPost, decodePostBody, fetchOnePost } from "../../../../api/postAPI";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { useParams } from 'react-router-dom';

// Styled components
const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`;

const EditPost = () => {

    const { id } = useParams()

    // States
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    // SEO url generator
    useEffect(() => {
        let result = title.replace(/\s+/g, '-').toLowerCase();
        setLink(result)
        console.log(link)
    }, [title])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const updatePost = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', editorState)
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

    // Editor state handler
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    useEffect(() => {
        fetchOnePost(id).then((data) => {
            console.log(data)
            setEditorState(decodePostBody(data.description))
            setTitle(data.title)
            setLink(data.link)
            setIsLoaded(true)
        },
            (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, [])
    if (error) {
        return (
            <AdminUI>
                <NotificationContainer />
                {NotificationManager.error(`${error.message}`, 'Error')}
            </AdminUI>
        )
    } else if (!isLoaded) {
        return (
            <AdminUI>
                <h1>Loading</h1>
            </AdminUI>
        )
    } else {
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
                        <Editor value={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange} />
                    </Card.Body>
                    <Card.Footer><Button variant="success" onClick={updatePost}>Add</Button></Card.Footer>
                </Card>
            </AdminUI>
        )
    }
}

export default EditPost