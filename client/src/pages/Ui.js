import React, { useState, useEffect } from 'react';
import DefaultButton from '../components/VitaforestUI/Interface/Buttons/DefaultButton';
import OrderElement from '../components/VitaforestUI/Interface/Order/OrderElement';
import styled from 'styled-components';
import Trashcan from '../components/VitaforestUI/Interface/Buttons/Trashcan';
import BlogElement from '../components/VitaforestUI/Blog/BlogElement';
import Input from '../components/VitaforestUI/Interface/Input/Input';

const UIFlex = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
@media screen and (min-width: 1128px){
    justify-content: none;
    flex-direction: column;
}
`;

const Main = styled.div`
`;

const Section = styled.div`
margin-top: 25px;
`;

function Ui() {
    return (
        <div>
            <Main>
                <UIFlex>
                    <OrderElement number='111111111' date='12.12.2007' status='On hold' total='100' items='10' />
                    <OrderElement number='111111111' date='12.12.2007' status='Cancelled' total='100' items='10' />
                    <OrderElement number='111111111' date='12.12.2007' status='Complete' total='100' items='120' />
                </UIFlex>
                <Section>
                    <BlogElement title='Hello, World' description='Hello, World! This is sample of blog card...' categorylink='/admin' date='Jan. 20, 2022' category='Untitled category' img='https://dev.vitaforest.eu/wp-content/uploads/2021/10/astragalus-astragalus-dasyanthus-dry-extract-e1618476656769.jpg' />
                    <BlogElement title='Hello, World' description='Hello, World! This is sample of blog card...' categorylink='/admin' date='Jan. 20, 2022' category='Untitled category' img='https://dev.vitaforest.eu/wp-content/uploads/2021/10/astragalus-astragalus-dasyanthus-dry-extract-e1618476656769.jpg' />
                    <BlogElement title='Hello, World' description='Hello, World! This is sample of blog card...' categorylink='/admin' date='Jan. 20, 2022' category='Untitled category' img='https://dev.vitaforest.eu/wp-content/uploads/2021/10/astragalus-astragalus-dasyanthus-dry-extract-e1618476656769.jpg' />
                </Section>
                <Section>
                    <Input placeholder='Hello, World!' label='Test input' />
                </Section>
            </Main>
        </div>
    );
}

export default Ui;