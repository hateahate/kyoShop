import React, { useState } from 'react';
import styled from 'styled-components';
import { registration } from '../api/userAPI';
import DefaultButton from '../components/VitaforestUI/Interface/Buttons/DefaultButton';
import { Form } from 'react-bootstrap'
import { Country, State, City }  from 'country-state-city';
import Input from '../components/VitaforestUI/Interface/Input/Input'
import Select from '../components/VitaforestUI/Interface/Select/Select'
const PageContainer = styled.div`

`

const RegistrationHeader = styled.div`

`

const Heading = styled.h2`
`
const SubHeading = styled.h3`
`

const FormContainer = styled.div`
`

const Registration = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('')
    const [gender,setGender] = useState('');
    const [companyName,setCompanyName] = useState('');
    const [website, setWebsite] = useState('');
    const [regisrty, setRegistry] = useState('');
    const [vat, setVat] = useState('');
    const [country, setCountry] = useState('');


    const countriesRaw = Country.getAllCountries();
    const CountriesArray = [];
    countriesRaw.forEach(elem =>{
        if(elem.name === "Kosovo"){
            return;
        }else
        CountriesArray.push(elem.name)

    }
    )

    //const UpdatedStates = State.getStatesOfCountry(countryCode)

    const Send = (e) => {
        
      let formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('birthDate', birthday);
      formData.append('gender',gender);
      formData.append('role', 'user');
      formData.append('companyName',companyName);
      formData.append('registryCode', regisrty);
      formData.append('vat',vat);
      formData.append('country',country)
      registration(formData).then(data => console.log(data))
      e.preventDefault();

    }

    return (

        <form onSubmit={(e)=> e.preventDefault()}>
            <Heading>New customer registration</Heading>
            <FormContainer>
                <SubHeading>Personal information</SubHeading>
                <Input label='First name' placeholder='Your name' type='text' onChange={(e) => { setfirstName(e.target.value)}}/>
                <Input label='Last name' placeholder='Your last name' type='text' onChange={(e) => { setLastName(e.target.value )} }/>
                <Input label='Date of birth' placeholder='dd/mm/yy' type='date' onChange={(e) => { setBirthday(e.target.value)}}/>
                <Select label='Gender' options={["1","2"]} name="gender" onChange={(e) => { setGender(e.target.value)}} />
            </FormContainer>
            <FormContainer>
                <SubHeading>Company information</SubHeading>
                <Input label='Company name' placeholder='Company' type='text' onChange={(e) => { setCompanyName(e.target.value )} }/>
                <Input label='Company website' placeholder='website.com' type='text' onChange={(e) => { setWebsite(e.target.value )} }/>
                <Input label='Registry code' placeholder='_ _ _ _ _ _' type='text' onChange={(e) => { setRegistry(e.target.value )} }/>
                <Input label='Tax/VAT number' placeholder='_ _ _ _ _ _' type='text' onChange={(e) => { setVat(e.target.value )} }/>
                <Select label="Country" options={countriesRaw} name={country}/>

            </FormContainer>
            <Form.Label>Мыло</Form.Label>
            <Form.Control value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
            <Form.Label>Пасс</Form.Label>
            <Form.Control value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
            <DefaultButton title="Create an account" onClick={(e) => Send()} />
        </form>
    );
};

export default Registration;


