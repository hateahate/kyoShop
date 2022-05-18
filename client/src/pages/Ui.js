import React, { useState, useEffect } from 'react';
import DefaultButton from '../components/VitaforestUI/Interface/Buttons/DefaultButton';
import OrderElement from '../components/VitaforestUI/Order/OrderElement';
import styled from 'styled-components';
import Trashcan from '../components/VitaforestUI/Interface/Buttons/Trashcan';
import BlogElement from '../components/VitaforestUI/Blog/BlogElement';
import Input from '../components/VitaforestUI/Interface/Input/Input';
import MobileAccountHead from '../components/VitaforestUI/Account/MobileAccountHead';
import Counter from '../components/VitaforestUI/Interface/Counter/Counter';
import ProductPage from '../components/VitaforestUI/Product/ProductCard/ProductPage/ProductPage';

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
                <Section>
                    <MobileAccountHead fullName='Test User' email='test@test.com'></MobileAccountHead>
                    <Counter qty='10' step='10' />
                </Section>
                <Section>
                </Section>
                <ProductPage></ProductPage>
            </Main>
        </div>
    );
}

export default Ui;