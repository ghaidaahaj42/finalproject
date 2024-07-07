import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvetationForom = ({ listOfGifts, childName }) => {
    const [invetation, setInvitation] = useState({ place: '', time: '',  description: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit");
      navigate('/invetation');
       
    };
  
    return (
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">   !{childName} הזמנה ליומהולדת של </h5>
              <button type="button" className="btn-close" onClick={() => NaN}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="giftImage" className="form-label">איפה ?</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="giftImage" 
                    value={invetation.place}
                    onChange={(e) => setInvitation({ ...invetation, place: e.target.value })}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="giftName" className="form-label">מתי ?</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="giftName" 
                    value={invetation.time}
                    onChange={(e) => setInvitation({ ...invetation, time: e.target.value })}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="giftDescription" className="form-label">הערות</label>
                  <textarea 
                    className="form-control" 
                    id="giftDescription" 
                    value={invetation.description}
                    onChange={(e) => setInvitation({ ...invetation, description: e.target.value })}
                    
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">שתפו את ההזמנה</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default InvetationForom