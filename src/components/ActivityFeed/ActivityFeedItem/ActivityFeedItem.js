import React from "react";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";
import { ActivityItem, ActivityLink } from "./ActivityFeedItem.style";

/**
 * Replaces the template string references with their actual object/content references
 *
 * @param {*} template
 * @param {*} templateObj
 * @param {*} task
 * @param {*} users
 */
const formatTemplate = (template, templateObj, task, users) => {
  let formattedTemplate = reactStringReplace(template, templateObj, () => {
    const id = /\d+/.exec(templateObj)[0];
    if (/profiles/.test(templateObj)) {
      return (
        <ActivityLink key={id} href={`/users/${users[id].slug}`}>
          {users[id].abbreviated_name}
        </ActivityLink>
      );
    } else if (/task/.test(templateObj)) {
      return (
        <ActivityLink key={id} href={`/tasks/${task.slug}`}>
          {task.name}
        </ActivityLink>
      );
    }
  });
  return formattedTemplate;
};

const ActivityFeedItem = ({ activity, task, users }) => {
  if (!activity || !task || !users) return null;

  let template = activity.template;
  const templateObjects = template.match(/{[^}]*\}/g);

  templateObjects.forEach(templateObj => {
    template = formatTemplate(template, templateObj, task, users);
  });

  return <ActivityItem>{template}</ActivityItem>;
};

ActivityFeedItem.propTypes = {
  activity: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

export default ActivityFeedItem;
