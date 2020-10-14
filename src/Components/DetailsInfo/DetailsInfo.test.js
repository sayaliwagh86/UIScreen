/*
   Detail info component Testing senario : 
   Snapshot testing and functional testing
*/

import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {store} from '../../Store';
import {WindText,HumidityText,WeatherReport} from './';
import DetailsInfo from './';
configure({ adapter: new Adapter() });

/*
*   Default data to test the component
*/
const detailsInfoVal = {
               "dataValue" : {
               	 "details":{
               	 	"heading":{
                      "text":"DetailsInfo"
                    },
               	 	"config":{
               	 		"customClass":"customClass"
                    },
                  "report":{
                      "wind":"20",
                      "humidity":"10"
               	 	}
               	 }
               }
            }

/*
* Snapshot testing of the Detail info component
* Functional testing of the Detail info component
*/            
            
describe("Details Info Component", () => {
let wrapper;
	wrapper = mount(<Provider store={store}><DetailsInfo {...detailsInfoVal}  /></Provider>);
	it("SnapShot Match for Details Info Component", () => {
		const page = renderer.create(<Provider store={store}><DetailsInfo {...detailsInfoVal} /></Provider>).toJSON();
		expect(page).toMatchSnapshot();
  });

});

describe("functional testing", () => {
  test("should render the DetailsInfo component from the store", () => {
    const wrapper = shallow(<Provider store={store}><DetailsInfo /></Provider>);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render the WeatherReport component from the store", () => {
    const wrapper = mount(<WeatherReport {...detailsInfoVal.dataValue.details.report} />);
    expect(wrapper.children().length).toBe(1);
  });

  test("should render the WindText component from the store", () => {
    const wrapper = mount(<WindText wind={detailsInfoVal.dataValue.details.report.wind} />);
     expect(wrapper.children().length).toBe(1);
  });

  test("should render the HumidityText component from the store", () => { 
    const wrapper = mount(<HumidityText humidity={detailsInfoVal.dataValue.details.report.humidity} />);
    expect(wrapper.children().length).toBe(1);
  });
});