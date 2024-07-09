import React, { useState } from 'react';

const AddChildForm = ({ addChild, setAddingChild }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      addChild({ name, questions: [] });
      setAddingChild(false);
    }
  };

  return (
    <div className="add-child-form">
      <h2>Add Child</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Child Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Child</button>
        <button type="button" className="btn btn-secondary" onClick={() => setAddingChild(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default AddChildForm;
