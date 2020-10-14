/*
   Heading : 
    It is common component to display the heading for all component
*/

import React from 'react';
import PropTypes from 'prop-types';
import Locale from "../../utlis/Locale";

/**
 * Function returning the heading to all the component
 * @param {*} props props
 */
function Heading(props){
    const {
       text
    } = props;
    return(
        <div className="heading">
            <h2>{Locale.print(text)}</h2>
        </div>
    )

}

export default Heading;
Heading.propTypes = {
    text: PropTypes.string
  }
Heading.defaultProps = {
    text: "Heading"
}