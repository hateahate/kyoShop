import React, { useState, useContext, useEffect } from 'react';
import AdminUI from './Ui/AdminUI';
import { Context } from '../..';
import { Button, Form } from 'react-bootstrap';
import { updatePassword } from '../../api/userAPI';
import Input from '../VitaforestUI/Interface/Input/Input';
import { fetchBasket, updateBasket } from '../../api/basketAPI';
import { fetchOnePost } from '../../api/postAPI';
import { liveSearch } from '../../api/searchAPI';


const Admin = () => {
    const { user } = useContext(Context);
    const { basket } = useContext(Context);
    const [isLoaded, setIsLoaded] = useState(true);
    const [prevPass, setPrevPass] = useState(null);
    const [newPass, setNewPass] = useState(null);
    const [basketData, setBasketData] = useState(null);
    const [sq, setSq] = useState('');
    const [sr, setSr] = useState([]);

    useEffect(() => {
        liveSearch(sq).then(data => {
            setSr(data);
        })
    }, [sq])


    if (isLoaded == false) {
        return <h1>Loading</h1>
    }
    return (
        <AdminUI>
            <Input type='text' onChange={(e) => { setSq(e.target.value); console.log(e.target.value) }}></Input>
            {sr.map((item) => {
                console.log(item)
            })}
        </AdminUI>
    )
}
export default Admin