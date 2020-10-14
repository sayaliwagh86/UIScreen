/*
   Input element : 
    It is common component to display the input type either password.text and email
    Pass the onchange function for validation or state of the input box
*/

import React from 'react';
import PropTypes from 'prop-types';

// Function retuning input reusable component
function Input(props){
    const {
        name,
        placeholder,
        type,
        value,
        onChange,
        autocomplete
    } = props;  
  
    return(
        <>
            <input 
              type={type} 
              onChange={(e) => onChange(e.target.value)} 
              value={value} 
              name={name} 
              placeholder={placeholder} 
              autoComplete={autocomplete} 
            />
        </>
    )

}

export default Input;
Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type:PropTypes.string
  }
Input.defaultProps = {
    name: "defaultValue",
    placeholder: "Pass placeholder value",
    type:"text"
  }