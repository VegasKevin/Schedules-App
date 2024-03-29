import React from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect} from 'react-redux';

class UpdateVolunteerModalContent extends React.Component {

    renderError ( { error, touched, meta }) {
        if (error && touched && !(meta.pristine)){
            return (
                <div className='ui error message'>
                    <div className='error'>{error}</div>
                </div>
            );
        }
    }

    renderInput = ( {input, label, meta}) => {
        const className = `field ${(meta.error && meta.touched && !(meta.pristine)) ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input  autoComplete='off' {...input}   />
                {/* { (meta.touched && meta.error && (meta.pristine)) && <span className='error'>{meta.error}</span> } */}
            </div>
        )
    }

    renderRadio = ( {input, options, meta, label} ) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                 {options.map((o) =>                  
                    <label key={o.value}><input type='radio' {...input} value={o.value} checked={input.value === o.value} /> 
                        {o.title}
                    </label>)
                    
                }
                 {/* { (meta.touched && meta.error) && <span className='error'>{meta.error}</span> } */}
            </div>
        );
    }

    onSubmit = (formValues) => {       
        this.props.onSubmit(formValues);
        
    }
    
    render () {
        return (
            <form
                onSubmit={this.props.handleSubmit}
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
                        label="Last Name"
                        />
                </div>
                <div>
                    <Field
                        name='emailAddress'
                        component={this.renderInput}
                        label="E-mail Address"
                        type='email' 
                        />
                </div>
                <div>                                       
                    <Field 
                        name="backGroundCheck" 
                        component={this.renderRadio}
                        label="Valid BackGround Check On File"
                        options = {[
                            { title : "Yes", value: "true"},
                            { title : "No", value : "false"}
                        ]}
                        />
                </div>
                <div>
                    <Field  
                        name="phoneNumber"
                        component={this.renderInput}
                        label="Phone Number"
                        />
                </div>
                <div>
                    <Field 
                        name='ministries'
                        component={this.renderInput}
                        type='text'
                        label="List Ministries they volunteer in"
                        />
                </div>
                <div>
                    <Field  
                        name="preferences"
                        component={this.renderInput}
                        type='text'
                        label="List Preferences for serving times"
                        />
                </div>
                <button type='submit' className='ui button primary' disabled={this.props.pristine || this.props.submitting}>Update Volunteer</button> 
                <button type='button' className='ui button negative' disabled={this.props.submitting} onClick={this.props.onDismiss}>Cancel</button>
            </div>
            </form>
        )
    }

}

const mapStateToProps = (state) =>{
   return  {
        volunteerSelected : state.volunteers.volunteerSelected
    }
}

UpdateVolunteerModalContent = reduxForm({
    form: 'updateVolunteerForm',
})(UpdateVolunteerModalContent)

UpdateVolunteerModalContent = connect ( 
    state => ({
        initialValues : state.volunteers.volunteerSelected
    }),
    {load : ''/*action creator? */}
)(UpdateVolunteerModalContent);

export default UpdateVolunteerModalContent;

