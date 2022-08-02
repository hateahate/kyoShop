import React from "react";
import AdminUI from "../../Ui/AdminUI";
import { Editor } from 'react-draft-wysiwyg';
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AddPost = () => {
    const [editorState, setEditorState] = useState('');
    return (
        <AdminUI>
            <Editor editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={e => setEditorState(e.target.value)} />
        </AdminUI>
    )
}

export default AddPost