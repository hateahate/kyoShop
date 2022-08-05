import React, { useState } from 'react';
import styled from 'styled-components';
import { registration } from '../api/userAPI';
import DefaultButton from '../components/VitaforestUI/Interface/Buttons/DefaultButton';
import Input from '../components/VitaforestUI/Interface/Input/Input';

const PageContainer = styled.div`

`

const RegistrationHeader =styled.div`

`
const Registration = () => {
    const [firstName,setfirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [birthday,setBirthday] = useState('');
    const [gender,setGender] = useState('');
    const [companyName,setCompanyName] = useState('');
    const [companyWebsite,setCompanyWebsite] = useState('');
    const [registryCode,setRegistryCode] = useState('');
    const [vat,setVat] = useState('');
    const [country,setCountry] = useState('');
    const [province,setProvince] = useState('');
    const [city,setCity] = useState('');
    const [zip,setZip] = useState('');
    const [postAddress,setPostAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const send = ()=>{
        let formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role',"user");
        registration(formData).then(data=> console.log(data))
    }
 
    return (

        <PageContainer>
            <RegistrationHeader>New customer registration</RegistrationHeader>
            <form>
                <Input value={firstName} onChange={(e)=>setfirstName(e.target.value)} label="First name"/>
                <Input value={lastName} onChange={(e)=>setLastName(e.target.value)} label="Last name"/>
                <Input value={birthday} onChange={(e)=>setBirthday(e.target.value)} label="Date of birth"/>
                <Input value={gender} onChange={(e)=>setGender(e.target.value)} label="Gender"/>
                <Input value={companyName} onChange={(e)=>setCompanyName(e.target.value)} label="Company name"/>
                <Input value={companyWebsite} onChange={(e)=>setCompanyWebsite(e.target.value)} label="Company website"/>
                <Input value={registryCode} onChange={(e)=>setRegistryCode(e.target.value)} label="Registry code"/>
                <Input value={vat} onChange={(e)=>setVat(e.target.value)} label="Tax/VAT number"/>
                <Input value={country} onChange={(e)=>setCountry(e.target.value)} label="Country"/>
                <Input value={province} onChange={(e)=>setProvince(e.target.value)} label="State/province"/>
                <Input value={city} onChange={(e)=>setCity(e.target.value)} label="City"/>
                <Input value={zip} onChange={(e)=>setZip(e.target.value)} label="Zip/postal code"/>
                <Input value={postAddress} onChange={(e)=>setPostAddress(e.target.value)} label="Post address"/>
                <Input value={phone} onChange={(e)=>setPhone(e.target.value)} label="Phone number"/>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} label="Email"/>
                <Input value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" type="password"/>
                <Input label="Confirm password"/>
                <DefaultButton title="Create an account" onClick = {()=>send()}/>
            </form>
            {console.log(firstName +" "+lastName +" "+birthday +" "+gender +" "+companyName +" "+companyWebsite +" "+registryCode +" "+vat +" "+country +" "+province +" "+city
             +" "+zip +" "+postAddress +" "+phone +" "+email +" "+password)}
            


        </PageContainer>
    );
};

export default Registration;


