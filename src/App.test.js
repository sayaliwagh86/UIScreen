/*
    App component Testing senario : 
*/
import React from "react";
import { configure,mount,shallow } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {store} from './Store';
import App  from './App';
configure({ adapter: new Adapter() });

/* Snapshot testing senario of component */
describe("App component Testing", () => {
	it("SnapShot Match for Header component", () => {
		const page = renderer.create(<Provider store={store}><App  /></Provider>).toJSON();
		expect(page).toMatchSnapshot();
	});
});