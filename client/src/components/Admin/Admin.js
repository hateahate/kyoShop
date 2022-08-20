import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import AdminUI from './Ui/AdminUI';
import { fetchOnePost, makePostHtml, decodePostBody } from '../../api/postAPI';
import { Interweave, Markup } from 'interweave'
import { convertToRaw, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Context } from '../..';
import { getUserById } from '../../api/userAPI';


const Admin = () => {
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getUserById(user.user.id).then(data => setUserData(data))
        fetchOnePost(3).then(data => {
            setTitle(data.title)
            setBody(makePostHtml(data.description))
            setIsLoaded(true)
        })
    }, [])
    return (
        <AdminUI>
            <h1>Dashboard</h1>
            <h2>Приветствуем тебя, </h2>
            <h2>Render post test</h2>
            <h3>Title: {title}</h3>
            {console.log(body)}
            <Markup content={body} />
        </AdminUI>
    )
}
export default Admin