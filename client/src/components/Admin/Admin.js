import React, { useState } from 'react';
import styled from 'styled-components';
import AdminUI from './Ui/AdminUI';
import { fetchOnePost, htmlPostBody } from '../../api/postAPI';

const Admin = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(null);
    fetchOnePost(2).then(data => {
        setTitle(data.title)
        setBody(htmlPostBody(data.description))
    })
    return (
        <AdminUI>
            <h1>Dashboard</h1>
            <h2>Render post test</h2>
            <h3>Title: {title}</h3>
            <div dangerouslySetInnerHTML={{ __html: body }}>
            </div>
        </AdminUI>
    )
}
export default Admin