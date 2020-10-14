/*
   Heading : 
   Rendring the Heading for application with Hamberug menu
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Locale from "../utlis/Locale";
import "./Header.css";
/**
 * Function returning the header
 * @param {*} props props
 */
function Header(props){
   const{
    dataValue
   } = props;
  return(
        <>
          <header>
              <div className="row">
                  <div className="col-2">
                      <a href="!#" className="icon menuIcon">
                         <i className="fa fa-bars"></i>
                      </a>
                  </div>
                  <div className="col-10">
                       <h1>{Locale.print(dataValue)}</h1>            
                  </div>
               </div>   
          </header>  
        </>
    )

}
const mapStateToProps = (state) => {
    return {dataValue: state.serviceReducer.modelData.content.heading.text};
}


export default connect(mapStateToProps)(Header);

Header.propTypes = {
  dataValue: PropTypes.string
}
Header.defaultProps = {
  dataValue: 'Weather Check'
}

