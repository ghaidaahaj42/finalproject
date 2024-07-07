import React, { useState } from 'react';

const AddGiftForm = ({ addGift, setAddingGift, childName }) => {
  const [gift, setGift] = useState({ image: '', name: '', price: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addGift(childName, gift);
    setAddingGift(false);
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Gift for {childName}</h5>
            <button type="button" className="btn-close" onClick={() => setAddingGift(false)}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="giftImage" className="form-label">Gift Image URL</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="giftImage" 
                  value={gift.image}
                  onChange={(e) => setGift({ ...gift, image: e.target.value })}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="giftName" className="form-label">Gift Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="giftName" 
                  value={gift.name}
                  onChange={(e) => setGift({ ...gift, name: e.target.value })}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="giftPrice" className="form-label">Gift Price</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="giftPrice" 
                  value={gift.price}
                  onChange={(e) => setGift({ ...gift, price: e.target.value })}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="giftDescription" className="form-label">Gift Description</label>
                <textarea 
                  className="form-control" 
                  id="giftDescription" 
                  value={gift.description}
                  onChange={(e) => setGift({ ...gift, description: e.target.value })}
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Add Gift</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGiftForm;
