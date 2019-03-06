import React, { Component } from "react";
import { ActivityFeedItem } from "./ActivityFeedItem";
import { data } from "../../data/activity_feed";
import { formatData } from "../../utils/formatData";
import { ActivityList } from "./ActivityFeed.style";

class ActivityFeed extends Component {
  state = {
    tasks: formatData(data.tasks),
    locations: formatData(data.locations),
    users: formatData(data.profiles),
    activity_feed: data.activity_feed
  };

  render() {
    const { activity_feed, tasks, users } = this.state;

    return (
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
            />
          );
        })}
      </ActivityList>
    );
  }
}

export default ActivityFeed;
