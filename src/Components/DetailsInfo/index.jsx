/*
   Details Info section : 
    Will display city  Precipitation, Wind, Humidity for Wheather report of city.
*/
import React from 'react';
import Heading from '../CommonComponents/Heading';
import { connect } from 'react-redux';
import Locale from "../utlis/Locale";
import "./DetailsInfo.css";

/**
 * Function returning precipitation details
 */
export function PrecipitationText(){
  return(
      <div className="col-4">
        <img src="./images/precipitation_icon.png" alt="precipitation" />
        <h5>{Locale.print("Precipitation")}</h5>
        <span>0%</span>
      </div>          
  );
}

/**
 * Function returning wind speed details
 * @param {*} props props
 */
export function WindText(props){
  return(
      <div className="col-4 wind">   
         <img src="./images/wind_icon.png" alt="wind_icon" />
         <h5>{Locale.print("Wind")}</h5>
         <span>{props.wind}m/s</span>
      </div>
  );
}

/**
 * Function returning humidity details
 * @param {*} props props
 */
export function HumidityText(props){
  return(
     <div className="col-4 humidity">              
       <img src="./images/humidity_icon.png" alt="humidity_icon" />
        <h5>{Locale.print("Humidity")}</h5>
       <span>{props.humidity}%</span>
     </div>
  );  
}

/**
 * Function returning precipitation, humidity and wind speed details
 * @param {*} props props
 */
export function WeatherReport(props){
  const {
    wind,
    humidity
  } =props;
  return(
    <>      
       <div className="reportSection">
            <div className="foreCast">
              <div className="row">
                <PrecipitationText />
                <WindText wind={wind} />
                <HumidityText humidity={humidity} />
               </div>
            </div>
       </div>
    </>
  );
}


/**
 * Components render the details info 
 * @param {*} props props
 */
function DetailsInfo(props){
  const {
    heading,
    config,
    report
  }=props.dataValue.details;
 
  const{
      customClass
  } = config;

  return(
      <>
        {report?
           <section className={`detailsInfo ${customClass}`}>
            <Heading {...heading} />
            <WeatherReport {...report} />
          </section>  
        :null}
      </>
  )
}
 
const mapStateToProps = (state) => {
  return {
      dataValue: state.serviceReducer.modelData.content 
  };
}

export default connect(mapStateToProps,null)(DetailsInfo);