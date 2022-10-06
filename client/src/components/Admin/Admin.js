import React, { useState, useContext, useEffect } from 'react';
import AdminUI from './Ui/AdminUI';
import { Context } from '../..';
import { Button, Form } from 'react-bootstrap';
import { updatePassword } from '../../api/userAPI';
import Input from '../VitaforestUI/Interface/Input/Input';


const Admin = () => {
    const { user } = useContext(Context);
    const { basket } = useContext(Context);
    const [isLoaded, setIsLoaded] = useState(true);
    const [prevPass, setPrevPass] = useState(null);
    const [newPass, setNewPass] = useState(null);

    const updateCart = () => {
        let product = { id: 10, qty: 200, price: 100 };
        let prevBasket = basket.items;
        console.log('Ниже предыдущее состояние корзины')
        console.log(typeof prevBasket);
        prevBasket.push(product);
        basket.setItems(prevBasket);
        console.log(basket.items);
    }

    if (isLoaded == false) {
        return <h1>Loading</h1>
    }
    return (
        <AdminUI>
            {console.log(basket.items)}
            <Button onClick={updateCart}>Add to cart</Button>
        </AdminUI>
    )
}
export default Admin