import React, { useState, useContext, useEffect } from 'react';
import AdminUI from './Ui/AdminUI';
import { Context } from '../..';
import { Button, Form } from 'react-bootstrap';
import { updatePassword } from '../../api/userAPI';
import Input from '../VitaforestUI/Interface/Input/Input';
import { fetchBasket, updateBasket } from '../../api/basketAPI';
import { fetchOnePost } from '../../api/postAPI';


const Admin = () => {
    const { user } = useContext(Context);
    const { basket } = useContext(Context);
    const [isLoaded, setIsLoaded] = useState(true);
    const [prevPass, setPrevPass] = useState(null);
    const [newPass, setNewPass] = useState(null);
    const [basketData, setBasketData] = useState(null);

    const updateCart = () => {
        let product = [{ id: 10, qty: 200, price: 100 }];
        const formData = new FormData();
        formData.append('userId', 6);
        formData.append('items', JSON.stringify(product));
        updateBasket(formData).then((data) => {
            console.log(data);
        })
    }

    useEffect(() => {
        fetchBasket(6).then((data) => {
            console.log(data);
        })
    }, [isLoaded])

    useEffect(() => {
        fetchOnePost(2).then((data) => {
            console.log(data)
        })
    }, [isLoaded])

    if (isLoaded == false) {
        return <h1>Loading</h1>
    }
    return (
        <AdminUI>
            {console.log(basketData)}
            <Button onClick={updateCart}>Add to cart</Button>
        </AdminUI>
    )
}
export default Admin