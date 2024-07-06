import React, { useState } from 'react';

const AddChildForm = ({ addChild, setAddingChild }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addChild({ name, gifts: [] });
    setAddingChild(false);
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Child</h5>
            <button type="button" className="btn-close" onClick={() => setAddingChild(false)}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="childName" className="form-label">Child Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="childName" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary">Add Child</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChildForm;
