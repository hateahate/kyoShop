import React, { useState } from 'react';
import styled from 'styled-components';
import { registration } from '../api/userAPI';
import DefaultButton from '../components/VitaforestUI/Interface/Buttons/DefaultButton';
import { Button, Form } from 'react-bootstrap'
import { Country, State, City }  from 'country-state-city';
import Input from '../components/VitaforestUI/Interface/Input/Input'
import Select from '../components/VitaforestUI/Interface/Select/Select'
import Header from '../components/VitaforestUI/Interface/Header/Header';
import Footer from '../components/VitaforestUI/Interface/Footer/Footer';
const PageContainer = styled.div`
    font-family: 'Proxima Nova';
    font-style: normal;
    box-sizing: border-box;
    
`

const ButtonContainer = styled.div`
    margin: 15px auto;
    button{
        dispaly:block;
        margin: 0 auto;
    }
`

const Heading = styled.h2`
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 17px;
    color: #303236;
    padding-bottom: 8px;
    border-bottom: 1px solid #303236;
`
const SubHeading = styled.h3`
    font-weight: 700;
    font-size: 13px;
    line-height: 14px;
    color: #40BF6A;
    margin-top: 25px;
    margin-bottom: 15px;
`

const FormContainer = styled.div`
    margin-top: 20px;
    padding:0px 18px;
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
    const [countryIso, setCountryIco] = useState('');
    const [state,setState] = useState('')
    const [city,setCity] = useState('');
    const [zip,setZip]= useState('');
    const [post,setPost]= useState('');
    const [phone,setPhone]= useState('');


    const countriesRaw = Country.getAllCountries();


    const updateCountry = function(e){
        setCountry(e.target.value)
        countriesRaw.forEach(elem=>{
            if(elem.name === e.target.value){
                setCountryIco(elem.isoCode)
            }
        })
    }

    const UpdatedStates = function(){
        if(countryIso){
         return State.getStatesOfCountry(countryIso)
        } else{
        return State.getStatesOfCountry("AF")
        }
    }

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
      formData.append('website',website)
      formData.append('state',state)
      formData.append('city',city)
      formData.append('zip',zip)
      formData.append('post',post)
      formData.append('phone',phone)
      registration(formData).then(data => console.log(data))
      e.preventDefault();

    }

    return (
        <PageContainer>
            <Header/>
            <FormContainer>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <Heading>New customer registration</Heading>
                    <FormContainer>
                        <SubHeading>Personal information</SubHeading>
                        <Input label='First name' placeholder='Your name' type='text' onChange={(e) => { setfirstName(e.target.value)}} required="true"/>
                        <Input label='Last name' placeholder='Your last name' type='text' onChange={(e) => { setLastName(e.target.value )} } required="true"/>
                        <Input label='Date of birth' placeholder='dd/mm/yy' type='date' onChange={(e) => { setBirthday(e.target.value)}}/>
                        <Select label='Gender' options={["male", "female", "transgender", 'gender neutral', 'non-binary', 'agender', 'pangender', 'genderqueer', 'two-spirit', 'third gender', 'and all', 'none or a combination of these']} name="gender" onChange={(e) => { setGender(e.target.value)}} />
                    </FormContainer>
                    <FormContainer>
                        <SubHeading>Company information</SubHeading>
                        <Input label='Company name' placeholder='Company' type='text' onChange={(e) => { setCompanyName(e.target.value )} }required="true"/>
                        <Input label='Company website' placeholder='website.com' type='text' onChange={(e) => { setWebsite(e.target.value )} }/>
                        <Input label='Registry code' placeholder='_ _ _ _ _ _' type='text' onChange={(e) => { setRegistry(e.target.value )} }/>
                        <Input label='Tax/VAT number' placeholder='_ _ _ _ _ _' type='text' onChange={(e) => { setVat(e.target.value )} }required="true"/>
                        <Select label="Country" options={countriesRaw} name={country} type='country'  onChange={(e) => { updateCountry(e)} }required="true"/>
                        <Select label="State/province" options={UpdatedStates()} name={country} type='country'  onChange={(e) => { setState(e.target.value )} }required="true"/>
                        <Input label='City' placeholder='Your city' type='text' onChange={(e) => { setCity(e.target.value )} }/>
                        <Input label='Zip/postal code' placeholder='_ _ _ _ _ _' type='text' onChange={(e) => { setZip(e.target.value )} }required="true"/>
                        <Input label='Post address' placeholder='Your post address' type='text' onChange={(e) => { setPost(e.target.value )} }required="true"/>
                        <Input label='Phone number' placeholder='+ _ _ _ (_ _ _)' type='text' onChange={(e) => { setPhone(e.target.value )} }required="true"/>
                    </FormContainer>
                    <FormContainer>
                        <SubHeading>Sign In information</SubHeading>
                        <Input label='Email' placeholder='youraddress@yourmail.com' type='email' onChange={e => setEmail(e.target.value)}required="true"/>
                        <Input label='Password' placeholder='• • • • • • • •' type='password' onChange={e => setPassword(e.target.value)}required="true"/>
                        <Input label='Confirm Password' placeholder='• • • • • • • •' type='password' onChange={e => setPassword(e.target.value)}required="true"/>
                    </FormContainer>
                    <ButtonContainer>
                    <DefaultButton title="Create an account" onClick={(e) => Send()}  width="248px"/>
                    </ButtonContainer>
                </form>
            </FormContainer>
        <Footer/>
        </PageContainer>
    );
};

export default Registration;


