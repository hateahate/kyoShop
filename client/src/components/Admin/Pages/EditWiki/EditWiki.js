import React, { useEffect } from "react";
import AdminUI from "../../Ui/AdminUI";
import { Editor } from 'react-draft-wysiwyg';
import { useState } from "react";
import { EditorState } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { fetchCategories } from "../../../../api/productAPI";
import { decodePostBody, encodePostBody } from "../../../../api/postAPI";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { useParams } from 'react-router-dom';
import { fetchOneWiki, updateWiki } from "../../../../api/wikiAPI";

// Styled components
const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`;




const EditWiki = () => {

    const { id } = useParams()

    // States
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categoryList, setCategoryList] = useState(null);
    const [loadedCats, setLoadedCats] = useState(false);

    // SEO url generator
    useEffect(() => {
        let result = title.replace(/\s+/g, '-').toLowerCase();
        setLink(result)
        console.log(link)
    }, [title])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const WikiUpdate = () => {
        const formData = new FormData();
        formData.append('id', id)
        formData.append('title', title);
        formData.append('description', encodePostBody(editorState));
        formData.append('link', link);
        formData.append('category', selectedCategories.join(','))
        console.log(formData);
        updateWiki(formData).then((data) => {
            if (data == true) {
                console.log(data)
                NotificationManager.success(`Wiki post "${title}" successfully updated`, 'Success')
            }
            else {
                NotificationManager.error(`Wiki post "${title}" cannot be updated`, `${data}`);
            }
        })
    }

    // Editor state handler
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    useEffect(() => {
        fetchCategories().then((data) => {
            setCategoryList(data)
            setLoadedCats(true)
        })
    }, [])

    //apending categories to this product
    const appendCategories = (id) => {
        let previous = selectedCategories;
        if (previous.includes(id)) {
            previous.splice(previous.indexOf(id), 1)
            setSelectedCategories(previous)
            console.log(selectedCategories.join(','))
        }
        else {
            previous.push(id)
            setSelectedCategories(previous)
            console.log(selectedCategories.join(','))
        }
    }

    useEffect(() => {
        fetchOneWiki(id).then((data) => {
            console.log(data)
            setEditorState(EditorState.createWithContent(decodePostBody(data.description)))
            setTitle(data.title)
            setSelectedCategories(JSON.parse("[" + data.category + "]"))
            setLink(data.link)
            setIsLoaded(true)
            console.log(editorState)
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
                <h1>Edit wiki post</h1>
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
                            <Col>
                                <Card>
                                    <Card.Header>Categories</Card.Header>
                                    <Card.Body>
                                        {categoryList.map(item => {
                                            return (
                                                <Form.Check key={item.id} type={'checkbox'}>
                                                    <Form.Check.Input type={'checkbox'} onClick={() => appendCategories(item.id)} defaultChecked={selectedCategories.includes(item.id)} />
                                                    {console.log(selectedCategories)}
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
                    <Card.Footer><Button variant="success" onClick={WikiUpdate}>Update</Button></Card.Footer>
                </Card>
            </AdminUI>
        )
    }
}

export default EditWiki