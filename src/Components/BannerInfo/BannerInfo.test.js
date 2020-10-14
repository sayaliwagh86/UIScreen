/*
   Banner Info Testing senario : 
   Snapshot testing and functional testing
*/
import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {store} from '../../Store';
import {LocationHeader,TemperatureValue,TemperatureImg} from './';
import BannerInfo from './';
configure({ adapter: new Adapter() });
/*
*   Default data to test the component
*/
const bannerValue={
	"dataValue":{
		"bannerInfo":{
			"icon":"10d",
			"tempDetails":{
				"temp":"451",
				 "main":"windy",
				 "description":"windy",
				 "wind":"10"
			},
			 "name":"Kotagiri",
			 "lat":"123",
			 "lon":"123"
		}
	}
}


/*
*   Snapshot testing of the bannerinfo component
*	Functional testing of the bannerinfo component
*/
describe("Banner Info Component", () => {
let wrapper;
	wrapper = mount(<Provider store={store}><BannerInfo {...bannerValue}  /></Provider>);
	it("SnapShot Match for Banner Info Component", () => {
		const page = renderer.create(<Provider store={store}><BannerInfo {...bannerValue} /></Provider>).toJSON();
		expect(page).toMatchSnapshot();
  });

});

describe("functional testing", () => {
  test("should render the BannerInfo component from the store", () => {
    const wrapper = shallow(<Provider store={store}><BannerInfo /></Provider>);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render the LocationHeader component from the store", () => {
    const wrapper = mount(<LocationHeader  name={bannerValue.dataValue.bannerInfo.name} />);
    expect(wrapper.children().length).toBe(1);
  });

  test("should render blank when no props are passed", () => {
    const wrapper = mount(<LocationHeader />);
    expect(wrapper.children().length).toBe(0);
  });

  test("should render the TemperatureValue component from the store", () => {
    const wrapper = mount(<TemperatureValue {...bannerValue.dataValue.bannerInfo.tempDetails} />);
     expect(wrapper.children().length).toBe(1);
  });

  test("should show alert with text Enter city name when search button is clicked with blank search ", () => { 
    const wrapper = mount(<Provider store={store}><BannerInfo /></Provider>);
    wrapper.find("button").first().simulate("click");
    const logSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
  });
  
  test("when search term is entered", () => {
    const updateVal=(val)=>{ return val; }
    const mockProps={
	    "name":"Input",
        "placeholder":"Enter the text",
        "type":"text",
        "value":"search",
        "onChange": (val) => {
			    updateVal(val);
			  },
        "autocomplete":"off"
}
    const wrapper = mount(<Provider store={store}><BannerInfo {...mockProps}/></Provider>);
    wrapper.find('[className="fa fa-search fa-lg"]').simulate("click");
    wrapper.find('[className="mapIcon"]').simulate("click");
  });

  test("should render the TemperatureImg component from the store", () => { 
    const wrapper = mount(<TemperatureImg icon={bannerValue.dataValue.bannerInfo.icon} />);
    expect(wrapper.children().length).toBe(1);
  });
});