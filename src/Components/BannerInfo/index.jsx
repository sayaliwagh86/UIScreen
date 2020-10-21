/*
   Banner Info : 
    Search box is used to search particular city.
    Thunk middleware where api is called with help of redux and react.
    Will display city name and temperature 
    Will display climatic image in  TemperatureImg
*/

import React, { useState, useEffect } from "react";
import Input from "../CommonComponents/Input";
import { connect } from "react-redux";
import { GetWeather, GetDailyForcast, GetWeatherFromCoordinates } from "../../Store/Action/ActionTask";
import LoadingSpinner from "../LoadingSpinner";
import Locale from "../utlis/Locale";
import "./BannerInfo.css";

/**
 * Function, returning the name of the city
 * @param {*} props props
 */
  export const LocationHeader = (props) => {
      return(
        <>
          {props.name?
          <h2>{Locale.print('WeatherFor')} {props.name}, India</h2>:''
          }
        </>
      );
  };

  /**
   * Function returning temperature in degree celcius
   * @param {*} props props
   */  
  export const TemperatureValue = (props) => {
      const { temp, main, description, wind } = props;

      const { speed } = wind;

      
      // Converting temperature in degree celcius
      const tempTocelisus = parseInt(temp) - 273.15;

      return (
        <div className="temperature">
          <h3>
            {parseFloat(tempTocelisus).toFixed(2)}
            <sup>&deg;C</sup>
          </h3>
          <p>{description}</p>
          <h4>{main}</h4>
          <p>{Locale.print('Wind')} :{speed} m/s</p>
        </div>
      );
  };

  /**
   * Function, rendering image for temperature
   * @param {*} props props
   */
  export const TemperatureImg = (props) => {
          return (
        <div className="tempImg">
          <img
            src={process.env.REACT_APP_IMGURL + props.icon + "@2x.png"}
            alt="climateImage"
          />
        </div>
      );

  };
 
  /**
   * Component render whole UI of banner info section
   * @param {*} props props
   */
 function BannerInfo(props) {
  const { icon, tempDetails, name } = props.dataValue.bannerInfo;
  /* istanbul ignore next */
  useEffect(() => {
    if (props.lat && props.lon) {
      props.GetDailyForcast(props.lat, props.lon);
      updateVal(props.dataValue.bannerInfo.name);
    }
  }, [props]);
  const [searchValue, updateVal] = useState("");
  const [buttonClick, setButtonClick] = useState(false);
  const [locationButton, setLocationButton] = useState(false);

  //Function envoked onChange of input field.
  /* istanbul ignore next */
  const updateOnKeyPress = (val) => {
    updateVal(val);
  };

  //Function to find and set the coordinates
  const searchGeoLocation = () => {
    setLocationButton(true);
    setButtonClick(true);

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    // On successfully getting the coordinates, this function invokes
    /* istanbul ignore next */
    const success = (pos) => {
      const crd = pos.coords;
      const lat = crd.latitude.toString();
      const lng = crd.longitude.toString();
      const coordinates = [lat, lng];
      getCityWeather(coordinates);
      return;
    };

    //On receiving some error on getting the coordinates, this function invokes
    /* istanbul ignore next */
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    //Javascript function to get the browser's location coordinates
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  // Function calling the GetWeatherFromCoordinates action
  /* istanbul ignore next */
  const getCityWeather = async (coordinates) => {
    props.GetWeatherFromCoordinates(coordinates);
  };

  // Function returning searchBox that is the input box
  const searchBox = () => {
    const searchVal = {
      name: "search",
      placeholder: Locale.print('SearchPlaceholder'),
      type: "text",
      value: searchValue,
      autocomplete: "off",
      onChange: updateOnKeyPress,
    };

    //Function to dispatch action onClick of the search button
    const searchBtn = () => {
      searchValue ? props.GetWeather(searchValue) : alert("Enter city name");
      searchValue ? setButtonClick(true) : setButtonClick(false);
    };

    return (
      <div className="SearchBox">
        <Input {...searchVal} />
        <button type="submit" onClick={searchBtn}>
          <i className="fa fa-search fa-lg"></i>
        </button>
        <button type="submit" onClick={searchGeoLocation} className="mapIcon">
          <i className="fa fa-map-marker fa-lg"></i>
        </button>
      </div>
    );
  };

  return (
    <>
      <section className="bannerInfo">
        <div className="row">
          <div className="col-12">
            {searchBox()}
            {tempDetails ? 
              <>
            <LocationHeader name={name} />
            <div className="row">
              <div className="col-8"><TemperatureValue {...tempDetails} /></div>
              <div className="col-4"><TemperatureImg icon={icon} /></div>
            </div> </> : null}
          </div>
        </div>
      </section>
      {(locationButton || searchValue) && buttonClick ? (
        !tempDetails ? (
            <LoadingSpinner />
        ) : null
      ) : null}
    </>
  );
}

/**
 * Helps to get city name and weather information along with lat and lon value.
 * @param {*} dispatch dispatch
 */
/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
  GetWeather: (cityName) => dispatch(GetWeather(cityName)),
  GetDailyForcast: (lat, lon) => dispatch(GetDailyForcast(lat, lon)),
  GetWeatherFromCoordinates: (coordinates) => dispatch(GetWeatherFromCoordinates(coordinates))
});

const mapStateToProps = (state) => {
  return {
    lat: state.serviceReducer.lat,
    lon: state.serviceReducer.lon,
    dataValue: state.serviceReducer.modelData.content,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerInfo);
