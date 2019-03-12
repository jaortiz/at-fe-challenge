import React from "react";
import { shallow, mount } from "enzyme";
import ActivityFeed from "./ActivityFeed";

describe("ActivityFeed", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ActivityFeed />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state and text on mouseEnter and mouseLeave", () => {
    const wrapper = mount(<ActivityFeed />);
    const activity = [
      {
        created_at: "2015-06-24T16:36:15+10:00",
        template: "{ profiles:2 } posted a task { task:1 }",
        event: "posted",
        task_id: 1,
        profile_ids: [2]
      }
    ];

    const task = {
      "1": {
        id: 1,
        name: "Test Task",
        slug: "test-slug"
      }
    };

    const user = {
      "2": {
        id: 2,
        abbreviated_name: "Jeremy O",
        slug: "jeremy-o"
      }
    };

    wrapper.setState({ tasks: task, users: user, activity_feed: activity });

    // initial state
    expect(wrapper.state("path")).toEqual("");
    expect(
      wrapper
        .find(".path")
        .first()
        .text()
    ).toEqual("");

    wrapper
      .find("a")
      .first()
      .simulate("mouseEnter");

    //on hover, state path and text should not be empty string
    expect(wrapper.state("path")).toEqual("/users/jeremy-o");
    expect(
      wrapper
        .find(".path")
        .first()
        .text()
    ).toEqual("/users/jeremy-o");

    wrapper
      .find("a")
      .first()
      .simulate("mouseLeave");

    // on hoverLeave path should be empty string
    expect(wrapper.state("path")).toEqual("");
    expect(
      wrapper
        .find(".path")
        .first()
        .text()
    ).toEqual("");
  });
});
