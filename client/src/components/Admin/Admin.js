import React, { useState } from 'react';
import styled from 'styled-components';
import AdminUI from './Ui/AdminUI';
import { fetchOnePost, makePostHtml, decodePostBody } from '../../api/postAPI';
import { Interweave, Markup } from 'interweave'
import { convertToRaw, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const Admin = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(null);
    fetchOnePost(3).then(data => {
        setTitle(data.title)
        setBody(makePostHtml(data.description))
    })
    return (
        <AdminUI>
            <h1>Dashboard</h1>
            <h2>Render post test</h2>
            <h3>Title: {title}</h3>
            {console.log(body)}
            <Markup content={body} />
        </AdminUI>
    )
}
export default Admin