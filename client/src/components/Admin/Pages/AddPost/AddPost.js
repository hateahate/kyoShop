import React from "react";
import AdminUI from "../../Ui/AdminUI";
import { Editor } from 'react-draft-wysiwyg';
import { useState } from "react";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Card, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const AddPost = () => {
    // Стилизованные компоненты
    const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    `

    // States
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState('');
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');

    // Editor state handler
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addPost = () => {

    }

    return (
        <AdminUI>
            {console.log(editorState)}
            <Card>
                <Card.Header>Add new post</Card.Header>
                <FlexBox>
                    <Card className='product-title'>
                        <Card.Header>Title</Card.Header>
                        <Form.Control aria-label="large"
                            value={title}
                            onChange={e => setTitle(String(e.target.value))}
                            placeholder="Post title"
                            type="text"
                        />
                    </Card>
                    <Card className='product-image'>
                        <Card.Header>Product image</Card.Header>
                        <Card.Body>
                            <Form.Control
                                className="mt-3"
                                type="file"
                                onChange={selectFile}
                            />
                        </Card.Body>
                    </Card>
                </FlexBox>
                <Card>
                    <Card.Header>Description</Card.Header>
                    <Editor editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange} />
                </Card>
                <Card.Footer>
                    <Button variant="outline-success" onClick={addPost}>Add</Button>
                </Card.Footer>
            </Card>
        </AdminUI>
    )
}

export default AddPost