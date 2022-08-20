import React, { useState } from 'react';
import styled from 'styled-components';
import AdminUI from './Ui/AdminUI';
import { fetchOnePost, htmlPostBody, decodePostBody } from '../../api/postAPI';
import { Interweave, Markup } from 'interweave'

const Admin = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(null);
    fetchOnePost(11).then(data => {
        setTitle(data.title)
        setBody(data.description)
    })
    return (
        <AdminUI>
            <h1>Dashboard</h1>
            <h2>Render post test</h2>
            <h3>Title: {title}</h3>
            <Markup content={body} />
        </AdminUI>
    )
}
export default Admin