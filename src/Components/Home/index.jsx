/*
   Home : 
    This is the Home component which will be displayed at the launch of the application
*/
import React from 'react';
import  BannerInfo from '../BannerInfo';
import  DetailsInfo from '../DetailsInfo';
import ForecastListings from '../ForecastListings';
import ChartComponent from '../ChartComponent';

/**
 * Component to render whole UI of Home page
 * @param {*} props props
 */
function Home(props){
  return(
    <>
      <BannerInfo />
      <DetailsInfo />
      <ForecastListings />
      <ChartComponent />
    </>
  );
}

export default Home;    
