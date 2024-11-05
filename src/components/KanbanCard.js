// src/components/KanbanCard.js
import React from 'react';
import todoIcon from '../assets/icons/todo.svg';
import inProgressIcon from '../assets/icons/in-progress.svg';
import backlogIcon from '../assets/icons/backlog.svg';
import doneIcon from '../assets/icons/done.svg';
import cancelledIcon from '../assets/icons/cancelled.svg';
import urgentIcon from '../assets/icons/urgent.svg';
import highIcon from '../assets/icons/high.svg';
import mediumIcon from '../assets/icons/medium.svg';
import lowIcon from '../assets/icons/low.svg';
import noPriorityIcon from '../assets/icons/no-priority.svg';

// Map for status icons
const statusIcons = {
  'Todo': todoIcon,
  'In progress': inProgressIcon,
  'Backlog': backlogIcon,
  'Done': doneIcon,
  'Cancelled': cancelledIcon
};

// Map for priority icons
const priorityIcons = {
  4: { label: 'Urgent', icon: urgentIcon },
  3: { label: 'High', icon: highIcon },
  2: { label: 'Medium', icon: mediumIcon },
  1: { label: 'Low', icon: lowIcon },
  0: { label: 'No priority', icon: noPriorityIcon }
};

const KanbanCard = ({ item }) => {
  const statusIcon = statusIcons[item.status] || null;
  const { label: priorityLabel, icon: priorityIcon } = priorityIcons[item.priority] || {};

  return (
    <div className="kanban-card">
      <div className="card-header">
        {statusIcon && <img src={statusIcon} alt={item.status} className="status-icon" />}
        <h3>{item.title}</h3>
      </div>
      <div className="priority">
        {priorityIcon && <img src={priorityIcon} alt={priorityLabel} className="priority-icon" />}
        <span>{priorityLabel}</span>
      </div>
      <p><strong>Status:</strong> {item.status}</p>
    </div>
  );
};

export default KanbanCard;
