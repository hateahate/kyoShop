import React, { useState, useEffect } from 'react';
import DefaultButton from '../components/VitaforestUI/Buttons/DefaultButton';
import OrderElement from '../components/VitaforestUI/Order/OrderElement';
import styled from 'styled-components';
import Trashcan from '../components/VitaforestUI/Buttons/Trashcan';

const UIMain = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
@media screen and (min-width: 1128px){
    justify-content: none;
    flex-direction: column;
}
`;

function Ui() {
    return (
        <div>
            <UIMain>
                <OrderElement number='111111111' date='12.12.2007' status='On hold' total='100' items='10' />
                <OrderElement number='111111111' date='12.12.2007' status='Cancelled' total='100' items='10' />
                <OrderElement number='111111111' date='12.12.2007' status='Complete' total='100' items='120' />
            </UIMain>
            <Trashcan />
        </div>
    );
}

export default Ui;