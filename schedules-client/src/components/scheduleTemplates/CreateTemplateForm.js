import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'semantic-ui-react';
import ExpandingTemplateComponent from './ExpandingTemplateComponent';

class CreateTemplateForm extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            allRolesArray : [ { } ],
            rolesString : "",
            bgCheck : false
        }
        this.handleRolesArraySubmit = this.handleRolesArraySubmit.bind(this);
        this.handleRolesInputChange = this.handleRolesInputChange.bind(this);
        this.handleBackGroundCheckChange = this.handleBackGroundCheckChange.bind(this);
    }

    handleRolesArraySubmit (event) {
      //  console.log('event value: ' + event.target.value)
        // let newRolesArray = this.state.allRolesArray.concat(this.state.rolesString);
        // this.setState( { allRolesArray : newRolesArray });
        // console.log('event.target: ' + event.target.dataset.label);
        const splitRolesArray = this.state.rolesString.trim().split(/\s+/);
        let mapOfRoles = splitRolesArray.map(role => {
            return ({ "roleName" : role });
        })
        let payload= { "mapOfRoles" : mapOfRoles/*"splitRolesArray" : splitRolesArray*/, "ministryName" : event.target.dataset.label }
        console.log('payload: ' + JSON.stringify(payload));
        this.props.addRole(payload);
        event.preventDefault();
    }

    handleRolesInputChange (event) {
        this.setState( { rolesString : event.target.value })
        // console.log("roleString: " + this.state.rolesString);
    }

    handleBGSubmit (payload){
        // this.props.onChange(value);
        this.setState({ bgCheck : /*event.target.*/payload.isRequired});
        this.props.addBackGroundCheck (payload);
    }

    //THis could also be considered a 'submit'
    handleBackGroundCheckChange (event) {
        //event.target.value is true or false
        //event.target.dataset.label is the name of the role
        // console.log('BG CHANGE event target: '+ event.target);
        // console.log("data-label of target: " + event.target.dataset.label);
        // console.log("event target value: " + event.target.value);
        // console.log("parent ministryname: " + JSON.stringify(event.target.dataset.ministryname));
        let change_BGCheckRequired_Payload = { "isRequired" : event.target.value, "roleName" : event.target.dataset.label, "parentMinistry" : event.target.dataset.ministryname }
        //var value = event.target.value;
        // this.setState({ bgCheck : /*event.target.*/value});
        this.handleBGSubmit(change_BGCheckRequired_Payload);
        // console.log("bgCheck targetValue: " + event.target.value);
        // console.log("label of BG target: " + event.target.dataset.label)
        
        // console.log("bgcheck state: " + this.state.bgCheck);
    }

    renderRolesInput = ( {input, label, meta, renderRoles}) => {
        const className = `field ${(meta.error && meta.touched && !(meta.pristine)) ? 'error' : ''}`;
        return (
            <div>
                <div className={className}>
                    <label>{label} : Enter the names of each Role in the {label} Ministry separated by a space</label>
                    <input  autoComplete='off' /*{...input}*/ onChange={this.handleRolesInputChange}  />
                    {/* { (meta.touched && meta.error && (meta.pristine)) && <span className='error'>{meta.error}</span> } */}
                    <Button data-label={label} onClick={/*(e) =>*/ this.handleRolesArraySubmit/*(e, label)*/}className='ui button primary'>Submit Roles</Button>
                </div>
                {/* <div>
                    <ExpandingTemplateComponent
                        renderRoles={this.renderRoles()}
                        />
                </div> */}
            </div>
        )
    }

    renderBackGroundRadio = ( {input, options, meta, label, ministryname} ) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className} >
                <label>Does the {label} role require a BackGround Check?</label>
                 {options.map((o) =>                  
                    <label  key={o.value}><input data-ministryname={ministryname} data-label={label} type='radio' {...input} /*onChange*/onClick={this.handleBackGroundCheckChange}  value={o.value} checked={/*input.value*/this.state.bgCheck === o.value} /> 
                        {o.title}
                    </label>)               
                }
                 {/* { (meta.touched && meta.error) && <span className='error'>{meta.error}</span> } */}
            </div>
        );
    }

    renderMinistries = () => {
        //console.log("Form -> this.props.ministryArray.map: " + JSON.stringify(this.props.ministryArray));
        return (
            this.props.ministryArray.map((ministry) => {
                return (               
                    <Field
                        key={ministry.ministryName} 
                        name={ministry.ministryName}
                        component={this.renderRolesInput}
                        label={ministry.ministryName}
                        />     
                )   //end return       
            })  // end map
        )   //end return
    }   // end function

    renderExpandable = () => {
        return(
            this.props.ministryArray.map((ministry) =>{
                return (
                    <ExpandingTemplateComponent
                        key={ministry.ministryName}
                        renderMinistries={this.renderMinistries}
                        renderRoles={this.renderRoles}
                        />
                )
            })
        )
    }

    renderRoles = () => {
    //    console.log(this.props.ministryArray.rolesArray);
        return (this.props.ministryArray.map((ministry) => {
            if(ministry.rolesArray !== undefined) {
                
                return (
                    /*this.props.ministryArray*/ministry.rolesArray.map((role) => {
                        return (
                            <Field
                                ministryname={ministry.ministryName}
                                key={role.roleName}
                                name={"roleName:"+ role.roleName}
                                component={this.renderBackGroundRadio}
                                label={role.roleName}
                                options = {[
                                    { title : "Yes", value: "true"},
                                    { title : "No", value : 'false'}
                                ]}
                                />
                        )
                    })
                )        
            }    
        }))
        // if(this.props.ministryArray.rolesArray !== undefined) {
        //     console.log("Not Undefined");
        //     return (
        //         this.props.ministryArray.rolesArray.map((role) => {
        //             return (
        //                 <Field
        //                     key={role}
        //                     name={role}
        //                     component={this.renderBackGroundRadio}
        //                     label={role}
        //                     />
        //             )
        //         })
        //     )
        //}
        
    }
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);    
    }

    render() {
        // console.log("form array: " + this.props.ministryArray.length === 0)
        // console.log("form array: " + typeof this.props.ministryArray.length)
        //console.log("roles array: " + JSON.stringify(this.state.allRolesArray))
        // console.log('ministry name: ' + JSON.stringify(this.props.ministryArray))
        return (
            <div  >
                <div>
                    <form 
                    className='ui form error'
                    style={{display:'flex', flexDirection:'row'}}
                    onSubmit={this.props.handleSubmit(this.onSubmit)/****ADD SUBMIT FUNCTION */}
                    >                
                    {/* Pass in an array of ministry names to be rendered with appropriate fields to add roles to */}
                        <div>
                            {/* <div> */}
                                {this.renderMinistries()} 
                            {/* </div>             */}
                            {/*I remove this button when I replaced it with the Modal Trigger Button on the CreateTemplateView Page  
                            </div><Button visibility={this.props.ministryArray.length === 0 ? "false" : "true"} className='ui button primary'>Submit Button</Button>*/}
                        </div>
                    </form>
                    
                    
                    <div style={{display:'flex',flexDirection:"column", overflow:'auto'}}/*style={{display:'flex', flexDirection:'row'}} */>
                            {this.renderRoles()}
                    </div>            
                </div>
            </div>
        )};
}

//export default CreateTemplateForm;
export default reduxForm({
    form: 'createTemplateForm',
})(CreateTemplateForm);