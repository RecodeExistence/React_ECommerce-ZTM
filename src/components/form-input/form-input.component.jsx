import React from 'react'; 

import './form-input.styles.scss'; 

const FormInput = ({ handleChange, label, ...otherFormAttributes}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherFormAttributes} />
        {
            label ? 
            (<label className={`${otherFormAttributes.value.length ? 'shrink' : ''} form-input-label`}>
                { label }
            </label>)
            : null 
        }
    </div>
)

export default FormInput; 