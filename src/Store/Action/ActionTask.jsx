import { setWeatherDate, setWeatherForcastDate } from './ActionGenerator';
import fetchCall from "../../Components/utlis/fetchCall/fetchCall";
import {logMessage} from "../../Components/utlis/Logger";

/**
 * Function to get the weather data
 * @param {*} cityName city name
 */
export const GetWeather = (cityName) => {
  const methodType = "get";
  return (dispatch) => {
    fetchCall(
      process.env.REACT_APP_WTRAPI + cityName + "&APPID=" + process.env.REACT_APP_APPID,
      methodType
    )
      .then((res) => dispatch(setWeatherDate(res)))
      .catch((err) => logMessage(">>>>> API Error component: " + err));

  };
};

/**
 * Function to get the weather data with respect to the place coordinates
 * @param {*} coordinates location coordinates
 */
export const GetWeatherFromCoordinates = (coordinates) => {
  const methodType = "get";
  return (dispatch) => {
    fetchCall(
      process.env.REACT_APP_WTHRFCRD +
        `lat=${coordinates[0]}&lon=${coordinates[1]}` +
        "&APPID=" +
        process.env.REACT_APP_APPID,
      methodType
    )
      .then((res) => dispatch(setWeatherDate(res)))
      .catch((err) => logMessage(">>>>> API Error component: " + err));
  };
};

/**
 * Function to get the forecast data
 * @param {*} lat latitude of the location
 * @param {*} lon longitude of the location
 */
export const GetDailyForcast = (lat, lon) => {
  const methodType = "get";
  return (dispatch) => {
    fetchCall(
      process.env.REACT_APP_DLYWFAPI +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly,minutely,current&appid=" +
        process.env.REACT_APP_APPID,
      methodType
    )
      .then((res) => dispatch(setWeatherForcastDate(res)))
      .catch((err) =>
      logMessage(">>>>> GetDailyForcast API Error : " + JSON.stringify(err))
      );
  };
};