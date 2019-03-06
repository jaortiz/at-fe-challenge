import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";

describe("ActivityFeed", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders its children correctly", () => {
    const Child = () => <p>Child</p>;
    const wrapper = shallow(
      <Layout>
        <Child />
      </Layout>
    );
    expect(wrapper.find(Child).exists()).toBe(true);
  });
});
