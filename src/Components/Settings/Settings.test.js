/*
  Setting router Testing senario : 
*/
import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {store} from '../../Store';
import Settings from ".";
configure({ adapter: new Adapter() });
/*
   Snapshot testing of the component
*/
describe("Settings Component", () => {
let wrapper;
	wrapper = mount(<Provider store={store}><Settings /></Provider>);    
	it("SnapShot Match for Settings component", () => {
		const page = renderer.create(<Provider store={store}><Settings  /></Provider>).toJSON();
		expect(page).toMatchSnapshot();
	});
});


