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
    const [postId, setPostId] = useState(0);
    useEffect(() => {
        getUserById(user.user.id).then((data) => {
            setUserData(data)
            fetchOnePost(4).then(data => {
                setTitle(data.title)
                setPostId(data.id)
                setBody(makePostHtml(data.description))
                setIsLoaded(true)
            })
        })
    }, [])
    if (isLoaded == false) {
        return <h1>Loading</h1>
    }
    if (isLoaded == true) { }
    return (
        <AdminUI>
            <h1>Dashboard</h1>
            <h2>Приветствуем тебя, {userData.first_name}</h2>
            <span>-----------------------------------------</span>
            <h4>Render post test</h4>
            <span>---------post id: {postId}-------------</span>
            <h5>Loaded post title: {title}</h5>
            <h5>And content:</h5>
            <Markup content={body} />
        </AdminUI>
    )
}
export default Admin