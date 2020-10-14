/*
   Input component Testing senario : 
   Snapshot testing
*/

import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import Input  from './';
configure({ adapter: new Adapter() });

const updateVal=(val)=>{ return val; }

/*
*   Default data to test the component
*/

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
/*
*   Snapshot testing of the Input component
*	Functional testing of the Input component
*/

describe("Input text", () => {
let wrapper;
	wrapper = mount(<Input {...mockProps}  />);    
	it("SnapShot Match for Input component", () => {
		const page = renderer.create(<Input {...mockProps}  />).toJSON();
		expect(page).toMatchSnapshot();
	});
});
