import React, { useEffect, useContext } from "react";
import AdminUI from "../../Ui/AdminUI";
import { Editor } from 'react-draft-wysiwyg';
import { useState } from "react";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { decodePostBody, encodePostBody } from "../../../../api/postAPI";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { Context } from "../../../..";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../../../api/productAPI";
import { createWiki } from "../../../../api/wikiAPI";

// Стилизованные компоненты
const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`;

const CatsViewer = styled.ul`
`

const AddWiki = () => {

    // States
    const { user } = useContext(Context)
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState('');
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');
    const [rawData, setRaw] = useState(null);
    const navigate = useNavigate();
    const [categoryList, setCategoryList] = useState(null);
    const [loadedCats, setLoadedCats] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([])

    // SEO url generator
    useEffect(() => {
        let result = title.replace(/\s+/g, '-').toLowerCase();
        setLink(result)
    }, [title])


    useEffect(() => {
        fetchCategories().then((data) => {
            setCategoryList(data)
            setLoadedCats(true)
        })
    }, [])

    // Categories update


    // Editor state handler
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        let i = encodePostBody(editorState)
        console.log(decodePostBody(i))
    }

    const appendCategories = (id) => {
        let previous = selectedCategories;
        if (previous.includes(id)) {
            previous.splice(previous.indexOf(id), 1)
            console.log('Стало так' + previous)
            setSelectedCategories(previous)
        }
        else {
            previous.push(id)
            console.log('А тут теперь так ' + previous)
            setSelectedCategories(previous)
        }
    }


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addWiki = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', encodePostBody(editorState))
        formData.append('link', link)
        formData.append('category', selectedCategories)
        formData.append('userId', user.user.id)
        createWiki(formData).then((data) => {
            if (data.id) {
                NotificationManager.success(`Wiki post "${title}" successfully created`, 'Success')
                return data.id
            }
            else {
                NotificationManager.error(`Wiki post "${title}" cannot be created`, `${data}`);
            }
        }).then(id => {
            setTimeout(() => {
                navigate(`/admin/wiki/edit/${id}`)
            }, 2000)
        })
    }
    if (loadedCats) {
        return (
            <AdminUI>
                <NotificationContainer />
                <h1>Add new wiki post</h1>
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
                                <Card>
                                    <Card.Header>Categories</Card.Header>
                                    <Card.Body>
                                        {categoryList.map(item => {
                                            return (
                                                <Form.Check key={item.id} type={'checkbox'}>
                                                    <Form.Check.Input type={'checkbox'} onClick={() => appendCategories(item.id)} />
                                                    <Form.Check.Label>{item.name}</Form.Check.Label>
                                                </Form.Check>
                                            )
                                        })}
                                    </Card.Body>
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
                    <Card.Footer><Button variant="success" onClick={addWiki}>Add</Button></Card.Footer>
                </Card>
            </AdminUI >
        )
    }
    else {
        return (
            <h1>Loading</h1>
        )
    }
}

export default AddWiki