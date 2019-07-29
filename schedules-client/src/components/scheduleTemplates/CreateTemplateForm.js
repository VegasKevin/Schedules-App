import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'semantic-ui-react';

class CreateTemplateForm extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            allRolesArray : [ { } ],
            rolesString : ""
        }
        this.handleRolesArraySubmit = this.handleRolesArraySubmit.bind(this);
        this.handleRolesInputChange = this.handleRolesInputChange.bind(this);
    }

    handleRolesArraySubmit (event) {
      //  console.log('event value: ' + event.target.value)
        // let newRolesArray = this.state.allRolesArray.concat(this.state.rolesString);
        // this.setState( { allRolesArray : newRolesArray });
        // console.log('event.target: ' + event.target.dataset.label);
        const splitRolesArray = this.state.rolesString.trim().split(/\s+/);
        let payload= { "splitRolesArray" : splitRolesArray, "ministryName" : event.target.dataset.label }
        this.props.addRole(payload);
        event.preventDefault();
    }

    handleRolesInputChange (event) {
        this.setState( { rolesString : event.target.value })
        // console.log("roleString: " + this.state.rolesString);
    }



    renderRolesInput = ( {input, label, meta}) => {
        const className = `field ${(meta.error && meta.touched && !(meta.pristine)) ? 'error' : ''}`;
        return (
                <div className={className}>
                    <label>{label} : Enter the names of each Role in the {label} Ministry separated by a space</label>
                    <input  autoComplete='off' /*{...input}*/ onChange={this.handleRolesInputChange}  />
                    {/* { (meta.touched && meta.error && (meta.pristine)) && <span className='error'>{meta.error}</span> } */}
                    <Button data-label={label} onClick={/*(e) =>*/ this.handleRolesArraySubmit/*(e, label)*/}className='ui button primary'>Submit Roles</Button>
                </div>
        )
    }

    renderBackGroundRadio = ( {input, options, meta, label} ) => {
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

    renderMinistries = () => {
        console.log('minArray: ' + JSON.stringify(this.props.ministryArray));
        return (
            this.props.ministryArray.map((ministry) => {
                return (
                    <Field
                        key={ministry.ministryName} 
                        name={ministry.ministryName}
                        component={this.renderRolesInput}
                        label={ministry.ministryName}
                        />                
            )})
            
        )
    }

    render() {
        // console.log("form array: " + this.props.ministryArray.length === 0)
        // console.log("form array: " + typeof this.props.ministryArray.length)
        //console.log("roles array: " + JSON.stringify(this.state.allRolesArray))
        // console.log('ministry name: ' + JSON.stringify(this.props.ministryArray))
        return (
            <form 
                className='ui form error'
                // onSubmit={this.props/****ADD SUBMIT FUNCTION */}
                >                
                {/* Pass in an array of ministry names to be rendered with appropriate fields to add roles to */}
                <div>
                    <div>
                        {this.renderMinistries()}
                    </div>
                    <Button /*visibility={this.props.ministryArray.length === 0 ? "false" : "true"}*/ className='ui button primary'>Submit Button</Button>
                </div>
            </form>
        )};
}

//export default CreateTemplateForm;
export default reduxForm({
    form: 'createTemplateForm',
})(CreateTemplateForm);