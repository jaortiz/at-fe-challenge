import React from "react";
import { shallow } from "enzyme";
import ActivityFeedItem from "./ActivityFeedItem";

describe("ActivityFeedItem", () => {
  const activity = {
    created_at: "2015-06-24T16:36:15+10:00",
    template: "{ profiles:1 } posted a task { task:1 }",
    event: "posted",
    task_id: 1,
    profile_ids: [1]
  };

  const task = {
    id: 1,
    name: "Test Task",
    slug: "test-slug"
  };

  const users = {
    "1": {
      id: 1,
      abbreviated_name: "Jeremy O",
      slug: "jeremy-o"
    }
  };

  it("renders null with no props", () => {
    const wrapper = shallow(<ActivityFeedItem />);
    expect(wrapper.getElement()).toBe(null);
  });

  it("renders correctly given props", () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <ActivityFeedItem
        activity={activity}
        task={task}
        users={users}
        handleHoverEnter={mock}
        handleHoverLeave={mock}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toEqual("Jeremy O posted a task Test Task");
  });
});
