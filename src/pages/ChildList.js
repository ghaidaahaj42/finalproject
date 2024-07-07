import React from 'react';

const ChildList = ({ children, setSelectedChild }) => {
  return (
    <div>
      <h2>Children</h2>
      <ul className="list-group">
        {children.map((child, index) => (
          <li 
            key={index} 
            className="list-group-item" 
            onClick={() => setSelectedChild(child)}
          >
            {child.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildList;