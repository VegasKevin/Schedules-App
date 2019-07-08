import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import { fullNameField } from './CreateVolunteerFormComponents';
// import { FormField } from 'semantic-ui-react';
import { createVolunteer } from '../../actions';

class CreateVolunteerModalContent extends React.Component{
    renderError ( { error, touched }) {
        if (error && touched){
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }

    renderInput = ( {input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        //console.log(meta);

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input } autoComplete='off' />
                { this.renderError(meta)}
            </div>
        )
    }

    onSubmit = formValues => {
        console.log(formValues);
        this.props.onSubmit(formValues);
    }

    render () {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
            <div className='ui form error'>
                <div>
                    <Field
                        name='firstName'
                        component={this.renderInput}
                        label='First Name' />
                </div>
                <div>
                    <Field 
                        name='lastName'
                        component={this.renderInput}
                        label="Last Name" />
                </div>
                <div>
                    <Field
                        name='emailAddress'
                        component={this.renderInput}
                        label="E-mail Address"
                        type='email' />
                </div>
                <div>
                    <div>
                        <label>
                        Valid BackGround Check on File
                            <Field 
                            name="backGroundCheck" 
                            component="input"
                            type='radio'
                            value='true'
                            />                            
                        {" "}
                        Yes
                        </label>
                        <label>
                            <Field 
                            name="backGroundCheck" 
                            component='input' 
                            type='radio'
                            value='false'/>
                        {" "}
                        No
                        </label>
                    </div>
                </div>
                <div>
                    <Field  
                        name="phoneNumber"
                        component={this.renderInput}
                        label="Phone Number" />
                </div>
                <div>
                    <Field 
                        name='ministries'
                        component={this.renderInput}
                        type='text'
                        label="List Ministries they volunteer in" />
                </div>
                <div>
                    <Field  
                        name="preferences"
                        component={this.renderInput}
                        type='text'
                        label="List Preferences for serving times"/>
                </div>

                

                <button className='ui button primary'>Create Volunteer</button>
            </div>
            </form>
        )
    }
};

const validateFields = formValues => {
    const errors = {};
    if(!formValues.firstName){
        errors.firstName = "You must enter a first name";
    }
    if(!formValues.lastName){
        errors.lastName = "You must enter a last name";
    }
    if(!formValues.emailAddress){
        errors.emailAddress = "You must enter an E-mail Address";
    }
    if(!formValues.backGroundCheck){
        errors.backGroundCheck = "You must indicate that status of a current background check";
    }
    return errors;
}

export default reduxForm({
    form : 'createVolunteerForm',
    validateFields
})(CreateVolunteerModalContent);