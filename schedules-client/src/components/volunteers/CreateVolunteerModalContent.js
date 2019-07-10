import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateVolunteerModalContent extends React.Component{
    
    renderError ( { error, touched }) {
        if (error && touched){
            return (
                <div className='ui error message'>
                    <div className='error'>{error}</div>
                </div>
            );
        }
    }

    renderInput = ( {input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input } autoComplete='off' />
                { (meta.touched && meta.error) && <span className='error'>{meta.error}</span> }
            </div>
        )
    }

    renderRadio = ( {input, options, meta, label} ) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                 {options.map((o) => 
                    <label key={o.value}><input type='radio' {...input} value={o.value} checked={o.value === input.value} /> 
                        {o.title} 
                    </label>)
                }
                 { (meta.touched && meta.error) && <span className='error'>{meta.error}</span> }
            </div>
        );
    }

    onSubmit = formValues => {       
        this.props.onSubmit(formValues);
    }    
    
    render () {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className='ui form error'
            >
            <div >
                <div>
                    <Field
                        name='firstName'
                        component={this.renderInput}
                        label='First Name' 
     
                         />
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
                    <Field 
                        name="backGroundCheck" 
                        component={this.renderRadio}
                        label="Valid BackGround Check On File"
                        options = {[
                            { title : "Yes", value: "true"},
                            { title : "No", value : 'false'}
                        ]}
                        />                                                    
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
                <button className='ui button primary' disabled={this.props.pristine || this.props.submitting}>Create Volunteer</button>
                <button className='ui button negative' disabled={this.props.submitting} onClick={this.props.onDismiss}>Cancel</button>
            </div>
            </form>
        )
    }
};

//validate is a keyword for Redux-Form
const validate = formValues => {
    const errors = {};
    if(!formValues.firstName){        errors.firstName = "You must enter a first name";   }
    if(!formValues.lastName){         errors.lastName = "You must enter a last name";  }
    if(!formValues.emailAddress){     errors.emailAddress = "You must enter an E-mail Address";  }
    if(!formValues.backGroundCheck){  errors.backGroundCheck = "You must indicate that status of a current background check";  }
    return errors;
}

export default reduxForm({
    form : 'createVolunteerForm',
    validate
})(CreateVolunteerModalContent);