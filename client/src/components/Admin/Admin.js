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
    const [isLoaded, setIsLoaded] = useState(true);
    const [postId, setPostId] = useState(0);

    if (isLoaded == false) {
        return <h1>Loading</h1>
    }
    return (
        <AdminUI>
            
        </AdminUI>
    )
}
export default Admin