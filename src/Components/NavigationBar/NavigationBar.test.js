/*
   Navigation bar Testing senario : 
*/

import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {store} from '../../Store';
import NavigationBar from ".";
configure({ adapter: new Adapter() });
//Navigation snapshot rendering testing 
describe("NavigationBar Component", () => {
let wrapper;
	wrapper = mount(<Provider store={store}><NavigationBar /></Provider>);    
	it("SnapShot Match for NavigationBar component", () => {
		const page = renderer.create(<Provider store={store}><NavigationBar  /></Provider>).toJSON();
		expect(page).toMatchSnapshot();
	});
});


