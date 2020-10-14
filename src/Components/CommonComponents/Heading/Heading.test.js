/*
   Heading banner Testing senario : 
   Snapshot testing and functional testing
*/
import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import Heading  from './';
configure({ adapter: new Adapter() });

/*
*   Default data to test the component
*/

const mockProps={
	"text":"Testing Heading"
}


/*
*   Snapshot testing of the Heading banner component
*	Functional testing of the Heading banner component
*/
describe("Heading text", () => {
let wrapper;
	wrapper = mount(<Heading {...mockProps}  />);    
	it("SnapShot Match for Heading component", () => {
		const page = renderer.create(<Heading {...mockProps}  />).toJSON();
		expect(page).toMatchSnapshot();
	});
	test('renders text of Heading component', () => {
		expect(wrapper.find('h2').text()).toBe(mockProps.text);
	});
});
