import React, { useEffect, useContext } from "react";
import AdminUI from "../../Ui/AdminUI";
import { Editor } from 'react-draft-wysiwyg';
import { useState } from "react";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Card, Form, Button, Container, Row, Col, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";
import { createPost, decodePostBody, encodePostBody } from "../../../../api/postAPI";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { convertToRaw } from "draft-js";
import { Context } from "../../../..";
import { useNavigate } from "react-router-dom";
import { ADMIN_EDIT_POST } from "../../../../utils/consts";
import { fetchCategories } from "../../../../api/productAPI";

// Стилизованные компоненты
const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`;

const AddPost = () => {

    // States
    const { user } = useContext(Context)
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState('');
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');
    const [rawData, setRaw] = useState(null);
    const navigate = useNavigate();
    const [categoryList, setCategoryList] = useState(null);
    const selectedCats = [];
    const [loadedCats, setLoadedCats] = useState(false);

    // SEO url generator
    useEffect(() => {
        let result = title.replace(/\s+/g, '-').toLowerCase();
        setLink(result)
    }, [title])


    useEffect(() => {
        fetchCategories().then((data) => {
            setCategoryList(data)
            console.log('случился фетч')
            console.log(data)
            setLoadedCats(true)
        })
    }, [])

    // Editor state handler
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        let i = encodePostBody(editorState)
        console.log(decodePostBody(i))
    }


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const appendList = (id) => {
        if (selectedCats.includes(id)) {
            alert(id + ' уже добавлен в список')
        }
        else {
            selectedCats.push(id)
            console.log(selectedCats)
        }
    }

    const addPost = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', encodePostBody(editorState))
        formData.append('link', link)
        console.log('Айди автора из контекста ' + user.user.id)
        formData.append('userId', user.user.id)
        createPost(formData).then((data) => {
            if (data.id) {
                NotificationManager.success(`Post "${title}" successfully created`, 'Success')
                return data.id
            }
            else {
                NotificationManager.error(`Post "${title}" cannot be created`, `${data}`);
            }
        }).then(id => {
            setTimeout(() => {
                navigate(`/admin/posts/edit/${id}`)
            }, 2000)
        })
    }
    if (loadedCats) {
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
                        <ButtonGroup size="lg" className="mb-2">
                            {categoryList.map(item => {
                                return (
                                    <Button key={item.id} onClick={() => appendList(item.id)}>{item.name}</Button>
                                )
                            })}
                        </ButtonGroup>
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
    else {
        return (
            <h1>Loading</h1>
        )
    }
}

export default AddPost