/*
   Loading spinner Testing senario : 
*/
import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import Loader  from './';
configure({ adapter: new Adapter() });

/*
   Snapshot testing of the component
*/
describe("Loader text", () => {
let wrapper;
	wrapper = mount(<Loader />);    
	it("SnapShot Match for Loader component", () => {
		const page = renderer.create(<Loader />).toJSON();
		expect(page).toMatchSnapshot();
	});
});
