/*
   Home component Testing senario : 
   Snapshot testing
*/
import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {store} from '../../Store';
import Home from "./";
configure({ adapter: new Adapter() });

/*
   Snapshot testing of the home component
*/
describe("Heading text", () => {
let wrapper;
	wrapper = mount(<Provider store={store}><Home /></Provider>);    
	it("SnapShot Match for Header component", () => {
		const page = renderer.create(<Provider store={store}><Home  /></Provider>).toJSON();
		expect(page).toMatchSnapshot();
	});
});


