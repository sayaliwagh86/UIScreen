/*
   Header component Testing senario : 
   Snapshot testing and functional testing
*/
import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {store} from '../../Store';
import Header  from './';
configure({ adapter: new Adapter() });

/*
   Header component Testing senario : 
   Snapshot testing and functional testing
*/

describe("Heading text", () => {
let wrapper;
	wrapper = mount(<Provider store={store}><Header /></Provider>);    
	it("SnapShot Match for Header component", () => {
		const page = renderer.create(<Provider store={store}><Header  /></Provider>).toJSON();
		expect(page).toMatchSnapshot();
	});
	test('renders text of header component', () => {
		expect(wrapper.find('h1').text()).toBe(store.getState().serviceReducer.modelData.content.heading.text);
	});
});


