import React, { useState } from 'react';

const EditChildForm = ({ child, updateChild, setEditingChild, deleteChild }) => {
  const [name, setName] = useState(child.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      updateChild(child.name, name);
      setEditingChild(null);
    }
  };

  const handleDelete = () => {
    deleteChild(child.name);
    setEditingChild(null);
  };

  return (
    <div className="edit-child-form">
      <h2>ערוך ילד</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>שם הילד</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">שמור שינויים</button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>מחק ילד</button>
        <button type="button" className="btn btn-secondary" onClick={() => setEditingChild(null)}>ביטול</button>
      </form>
    </div>
  );
};

export default EditChildForm;
