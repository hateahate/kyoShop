import React from "react";
import AdminUI from "../../Ui/AdminUI";
import { Editor } from 'react-draft-wysiwyg';
import { useState } from "react";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const AddPost = () => {
    const [editorState, setEditorState] = useState('');
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }
    return (
        <AdminUI>
            <div><h1>Editor page</h1></div>
            {console.log(editorState)}
            <Editor editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange} />
        </AdminUI>
    )
}

export default AddPost