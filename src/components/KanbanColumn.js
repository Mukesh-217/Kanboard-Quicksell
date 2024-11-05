// src/components/KanbanColumn.js
import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanColumn = ({ title, items }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {items.map((item) => (
        <KanbanCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default KanbanColumn;

