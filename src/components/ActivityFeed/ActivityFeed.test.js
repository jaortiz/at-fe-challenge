import React from "react";
import { shallow } from "enzyme";
import ActivityFeed from "./ActivityFeed";

describe("ActivityFeed", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ActivityFeed />);
    expect(wrapper).toMatchSnapshot();
  });
});
