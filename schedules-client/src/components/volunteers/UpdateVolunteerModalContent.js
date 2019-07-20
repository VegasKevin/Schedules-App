import React from 'react';

import { reduxForm, Field } from 'redux-form';
import history from '../../history';
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

    renderInput = ( {input, label, meta, givenValue}) => {
        console.log('input ' + JSON.stringify(input));
        //console.log('touched: ' + meta.touched);
        const className = `field ${(meta.error && meta.touched && !(meta.pristine)) ? 'error' : ''}`;
        //console.log("meta: " + JSON.stringify(meta));
        return (
            <div className={className}>
                <label>{label}</label>
                <input  editable="true" /*defaultValue={{...input.value} }*/ autoComplete='off' value={{...input}}   />
                { (meta.touched && meta.error && (meta.pristine)) && <span className='error'>{meta.error}</span> }
            </div>
        )
    }

    

    renderRadio = ( {input, options, meta, label, givenValue} ) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
       // console.log('given: ' + givenValue);

        return (
            <div className={className}>
                <label>{label}</label>
                 {options.map((o) =>                  
                    <label key={o.value}><input type='radio' {...input} value={o.value/*givenValue*/} checked={input.value === o.value} /*defaultChecked={...() => (givenValue === o.value) ? 'defaultChecked' : ''}*/ /> 
                        {o.title}
                    </label>)
                    
                }
                
                 { (meta.touched && meta.error) && <span className='error'>{meta.error}</span> }
            </div>
        );
    }

    onSubmit = formValues => {       
        console.log("on submit in UpdateVOlModalContent.js")
        this.props.onSubmit(formValues);
        
    }

    
    render () {
        return (
            <form
                onSubmit={() => {console.log("wjjkd:" + JSON.stringify(this.props)); this.props.handleSubmit(this.onSubmit); history.push('/volunteers');}}
                className='ui form error'
            >
            <div >
                <div>
                    <Field
                        name='firstName'
                        component={this.renderInput}
                        label='First Name'
                        givenValue={this.props.volunteerSelected.firstName}   />
                </div>
                <div>
                    <Field 
                        name='lastName'
                        component={this.renderInput}
                        label="Last Name"
                        givenValue={this.props.volunteerSelected.lastName} />
                </div>
                <div>
                    <Field
                        name='emailAddress'
                        component={this.renderInput}
                        label="E-mail Address"
                        type='email' 
                        givenValue={this.props.volunteerSelected.emailAddress}  />
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
                        givenValue={this.props.volunteerSelected.backGroundCheck} />                                                    
                </div>
                <div>
                    <Field  
                        name="phoneNumber"
                        component={this.renderInput}
                        label="Phone Number"
                        givenValue={this.props.volunteerSelected.phoneNumber} />
                </div>
                <div>
                    <Field 
                        name='ministries'
                        component={this.renderInput}
                        type='text'
                        label="List Ministries they volunteer in"
                        givenValue={this.props.volunteerSelected.ministries} />
                </div>
                <div>
                    <Field  
                        name="preferences"
                        component={this.renderInput}
                        type='text'
                        label="List Preferences for serving times"
                        givenValue={this.props.volunteerSelected.preferences}  />
                </div>
                <button type='submit' className='ui button primary' disabled={this.props.pristine || this.props.submitting}>Update Volunteer</button>
                <button type='button' className='ui button negative' disabled={this.props.submitting} onClick={this.props.onDismiss}>Cancel</button>
            </div>
            </form>
        )
    }

}

//validate is a keyword for Redux-Form
const validate = formValues => {
    const errors = {};
    console.log("validate in UpdateVOlModalContent.js")
    if(!formValues.firstName){        errors.firstName = "You must enter a first name";   }
    if(!formValues.lastName){         errors.lastName = "You must enter a last name";  }
    if(!formValues.emailAddress){     errors.emailAddress = "You must enter an E-mail Address";  }
    if(!formValues.backGroundCheck){  errors.backGroundCheck = "You must indicate that status of a current background check";  }
    return errors;
}

const mapStateToProps = ( state, props) =>{
   return  {
        volunteerSelected : state.volunteers.volunteerSelected
    }
}

const wrappedConnect = connect(
    mapStateToProps
)(UpdateVolunteerModalContent);

export default /*connect (mapStateToProps)*/
     reduxForm({
    form : 'updateVolunteerForm',
    enableReinitialize: true,
    validate
})(wrappedConnect)/*(UpdateVolunteerModalContent);*/

//export default UpdateVolunteerModalContent