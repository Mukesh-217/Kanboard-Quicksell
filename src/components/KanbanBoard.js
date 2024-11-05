import React from 'react';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ data, groupBy, sortBy }) => {
  const groupData = () => {
    if (!data || !data.tickets) return {};
    return data.tickets.reduce((acc, ticket) => {
      let key;
      if (groupBy === 'user') {
        const user = data.users.find(user => user.id === ticket.userId);
        key = user ? user.name : 'Unassigned';
      } else {
        key = ticket[groupBy] || 'Unassigned';
      }
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});
  };

  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const groupedData = groupData();

  return (
    <div className="kanban-board">
      {Object.keys(groupedData).map((key) => (
        <KanbanColumn key={key} title={key} items={sortTickets(groupedData[key])} />
      ))}
    </div>
  );
};

export default KanbanBoard;
