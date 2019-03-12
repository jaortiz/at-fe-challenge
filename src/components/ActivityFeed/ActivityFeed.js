import React, { Component } from "react";
import { ActivityFeedItem } from "./ActivityFeedItem";
import { data } from "../../data/activity_feed";
import { formatData } from "../../utils/formatData";
import {
  ActivityWrapper,
  ActivityList,
  PathWrapper
} from "./ActivityFeed.style";

class ActivityFeed extends Component {
  state = {
    tasks: formatData(data.tasks),
    locations: formatData(data.locations),
    users: formatData(data.profiles),
    activity_feed: data.activity_feed,
    path: ""
  };

  handleHoverEnter = path => {
    this.setState({ path });
  };

  handleHoverLeave = () => {
    this.setState({ path: "" });
  };

  render() {
    const { activity_feed, tasks, users, path } = this.state;

    return (
      <ActivityWrapper>
        <ActivityList className="activity-list">
          {activity_feed.map((activity, index) => {
            let activityUsers = activity.profile_ids.map(profile_id => ({
              [profile_id]: users[profile_id]
            }));

            return (
              <ActivityFeedItem
                key={index}
                activity={activity}
                task={tasks[activity.task_id] || {}}
                users={Object.assign({}, ...activityUsers)}
                handleHoverEnter={this.handleHoverEnter}
                handleHoverLeave={this.handleHoverLeave}
              />
            );
          })}
        </ActivityList>
        <PathWrapper>
          <p className="path">{path}</p>
        </PathWrapper>
      </ActivityWrapper>
    );
  }
}

export default ActivityFeed;
