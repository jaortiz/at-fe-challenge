import React from "react";
import { shallow } from "enzyme";
import { ActivityView } from "./ActivityView";
import { Layout } from "../components/Layout";
import { ActivityFeed } from "../components/ActivityFeed";

describe("Activity Feed View", () => {
  it("render correctly", () => {
    const wrapper = shallow(<ActivityView />);

    expect(wrapper.find(Layout).exists()).toBe(true);
    expect(wrapper.find(ActivityFeed).exists()).toBe(true);
  });
});
