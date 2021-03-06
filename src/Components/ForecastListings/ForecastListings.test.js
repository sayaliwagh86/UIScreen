/*
   Forecastlisting Testing senario : 
   Snapshot testing and functional testing
*/
import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {store} from '../../Store';
import {ForecastListings} from './';
configure({ adapter: new Adapter() });

/*
*   Default data to test the component
*/

const foreCastDetailsVal = {
               "dataValue" : {
               	 "forecast": {
                      "heading": {
                        "text": "Forecast",
                      },
                      "config": {
                        "customClass": "detailsMargin",
                      },
                    },
                  },
                  "foreCastDetails": {
                    'lat': 19.8,
                    'lon': 85.85,
                    'timezone': "Asia/Kolkata",
                    'timezone_offset': 19800,
                    'daily': [
                      {
                        'dt': 1599975000,
                        'sunrise': 1599955425,
                        'sunset': 1599999692,
                        'temp': {
                          'day': 304.07,
                          'min': 301.86,
                          'max': 304.15,
                          'night': 302.23,
                          'eve': 302.9,
                          'morn': 301.9,
                        },
                        'feels_like': {
                          'day': 307.23,
                          'night': 304.99,
                          'eve': 305.79,
                          'morn': 306.3,
                        },
                        'pressure': 1007,
                        'humidity': 76,
                        'dew_point': 299.34,
                        'wind_speed': 5.74,
                        'wind_deg': 125,
                        'weather': [
                          {
                            'id': 500,
                            'main': "Rain",
                            'description': "light rain",
                            'icon': "10d",
                          },
                        ],
                        'clouds': 69,
                        'pop': 0.59,
                        'rain': 1.31,
                        'uvi': 13.05,
                      }
                    ]
                  }
               }
 /*
*   Snapshot testing of the Forecastlisting component
* Functional testing of the Forecastlisting component
*/           
describe("Forecast Details Component", () => {
let wrapper;
	wrapper = mount(<Provider store={store}><ForecastListings {...foreCastDetailsVal}  /></Provider>);
	it("SnapShot Match for Forecast Details Component", () => {
		const page = renderer.create(<Provider store={store}><ForecastListings {...foreCastDetailsVal} /></Provider>).toJSON();
		expect(page).toMatchSnapshot();
  });

});


describe("Forecast Details Component", () => {
let wrapper;
  wrapper = mount(<Provider store={store}><ForecastListings {...foreCastDetailsVal}  /></Provider>);
  it("SnapShot Match for Forecast Details Component", () => {
    const page = renderer.create(<Provider store={store}><ForecastListings {...foreCastDetailsVal} /></Provider>).toJSON();
    expect(page).toMatchSnapshot();
  });

});
