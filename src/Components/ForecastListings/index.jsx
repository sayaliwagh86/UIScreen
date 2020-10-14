/*
   Forecast Listings Info section : 
   Rendring the ForecastListing which display the 7 days of particular city
*/

import React from 'react';
import Heading from '../CommonComponents/Heading';
import { connect } from 'react-redux';
import LoadingSpinner from "../LoadingSpinner";
import "./ForecastListings.css";
import DateConversation from '../utlis/DateConversation';


/**
 * Rendring the ForecastListing component
 * @param {*} props props
 */
export function ForecastListings(props){

    const {
      dataValue,
      foreCastDetails
    } = props;

    const{
      forecast
    } = dataValue;

    const {
      heading,
      config
    } = forecast;

    const{
        customClass
    } = config;

   let foreCastHtml = null;

   if(foreCastDetails){
      const {
        daily
      } = foreCastDetails;

     foreCastHtml=daily.map((forecastValue)=>{
                              return(
                            <div key={forecastValue.dt}>
                              {DateConversation(forecastValue.dt)}   
                              <img src={process.env.REACT_APP_IMGURL + forecastValue.weather[0].icon + ".png"} alt={forecastValue.dt}  />                                     
                            </div>
                        );

                  });

   }
    

    return(
        <>
          {props.dataValue.bannerInfo.name? 
            props.foreCastDetails? 
              <section className={`detailsInfo ${customClass}`}>
                <Heading {...heading} />
                 <div className="reportSection">
                    <div className="foreCastListings">
                      {foreCastHtml}
                    </div>
                 </div>
              </section>
           : <LoadingSpinner />
           : null}
        </>
    )

}

const mapStateToProps = (state) => {    
    return {
       dataValue: state.serviceReducer.modelData.content,
       foreCastDetails:state.serviceReducer.foreCastDetails, 
    };
  }

export default connect(mapStateToProps,null)(ForecastListings);