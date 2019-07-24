import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { getOneVolunteer } from '../../actions';


class SearchVolunteerView extends React.Component {

    renderSearchField = ( {input, label, meta }) => {
        const className = `field${meta.error && meta.touched ? 'error' : ''}`;
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                { meta.error && <span className='error'>{meta.error}</span>}
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.getOneVolunteer(formValues);
    }

    render() {
        return (
            <form
                className='ui form error'
                onSubmit={this.props.handleSubmit(this.onSubmit)}

            >
                <div>
                    <div>
                        <Field
                            name="firstName"
                            label='First Name'
                            component={this.renderSearchField}
                        />
                    </div>
                    <div>
                        <Field
                            name='lastName'
                            label='Last Name'
                            component={this.renderSearchField}
                        />                
                    </div>
                    <button className='ui buttton primary' disabled={this.props.pristine || this.props.submitting}>Search</button>
                </div>


            </form>
        );
    }

}
const validate = formValues => {
    const errors = {};
    if(formValues.firstName !== undefined){
        if(formValues.firstName.length > 15){        errors.firstName = "First Name is too many characters";   }
      }
    if(formValues.lastName !== undefined){
        if(formValues.lastName.length > 20){         errors.lastName = "Last Name is too  many characters";  }
    }
    
    return errors;
}

const decoratedWithRedux = connect (null, {getOneVolunteer})(SearchVolunteerView);
export default 
    reduxForm ({
        form : "SearchVolunteerForm",
        validate
    }) (decoratedWithRedux);
