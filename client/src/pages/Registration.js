import React from 'react';
import Input from "../utils/input/Input";
import Label from "../utils/label/Label";
const Registration = () => {
    return (
        <div className='registration'>
           <h2 className="registration__title">New customer registration</h2>
            <form className="registration__form form reg-form">
                <h3 className="reg-form__header">Personal information</h3>
                <div className="form__group">
                    <Label required ="true" text ='First name'/>
                    <Input type='text' placeholder="Your name"/>
                </div>
                <div className="form__group">
                    <Label required ="true" text ='Last name'/>
                    <Input type='text' placeholder="Your last name"/>
                </div>
                <div className="form__group">
                    <Label text ='Date of birth'/>
                    <Input type='date' placeholder="dd/mm/yy"/>
                </div>
                <div className="form__group">
                    <Label text ='Gender'/>
                    <Input type='select' options={["Male", "Female", "Other"]} placeholder="Set your gender"/>
                </div>
                <h3 className="reg-form__header">Company information</h3>
                <div className="form__group">
                    <Label text ='Company name'/>
                    <Input type='text'  placeholder="Company"/>
                </div>
                <div className="form__group">
                    <Label text ='Company website'/>
                    <Input type='text' placeholder="website.com"/>
                </div>
                <div className="form__group">
                    <Label text ='Registry code'/>
                    <Input type='text' placeholder="_ _ _ _ _ _"/>
                </div>
                <div className="form__group">
                    <Label text ='Tax/VAT number' required='true'/>
                    <Input type='text'  placeholder="_ _ _ _ _ _"/>
                </div>
                <div className="form__group">
                    <Label text ='Country' required='true'/>
                    <Input type='select' options={["Russia", "American Russia", "Other"]} placeholder="Set your gender"/>
                </div>
                <div className="form__group">
                    <Label text ='State/province' required='true'/>
                    <Input type='select' options={["Moskovia", "Harabovsk", "Jija"]} placeholder="Set your gender"/>
                </div>
                <div className="form__group">
                    <Label text ='City' />
                    <Input type='text' placeholder="Your city"/>
                </div>
                <div className="form__group">
                    <Label text ='Zip/postal code' required="true"/>
                    <Input type='text' placeholder="_ _ _ _ _ _"/>
                </div>
                <div className="form__group">
                    <Label text ='Post address' required="true"/>
                    <Input type='text' placeholder="Your post address"/>
                </div>
                <div className="form__group">
                    <Label text ='Phone number' required="true"/>
                    <Input type='text' placeholder="+ _ _ _ (_ _ _)"/>
                </div>
                <h3 className="reg-form__header">Sign In information</h3>
                <div className="form__group">
                    <Label text ='Email' required="true"/>
                    <Input type='text' placeholder="youraddress@yourmail.com"/>
                </div>
                <div className="form__group">
                    <Label text ='Password' required="true"/>
                    <Input type='text' placeholder="• • • • • • • •"/>
                </div>
                <div className="form__group">
                    <Label text ='Confirm password' required="true"/>
                    <Input type='text' placeholder="• • • • • • • •"/>
                </div>
                <button className='reg-form__btn btn'>Create an account</button>
            </form>
        </div>
    );
};

export default Registration;