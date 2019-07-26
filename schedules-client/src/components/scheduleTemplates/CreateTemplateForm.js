import React from 'react';
import { Form, Field } from 'redux-form';

class CreateTemplateForm extends React.Component{


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

    render() {
        return (
            <form className='ui form error'>



            </form>
        )};
}

export default CreateTemplateForm;