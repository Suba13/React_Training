import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it("App", () => {
  it('should have class "App"'),
    () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find("p").length).toEqual(3);
    };
});
