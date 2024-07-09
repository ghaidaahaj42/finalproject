import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvetationForom = ({ listOfGifts, childName }) => {
    const [invitation, setInvitation] = useState({ name: childName, place: '', time: '', description: '', list: listOfGifts });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/invitation/${childName}`, { state: invitation });
    };

    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Invitation for {childName}</h5>
                        <button type="button" className="btn-close" onClick={() => navigate('/')}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="place" className="form-label">Place</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="place"
                                    value={invitation.place}
                                    onChange={(e) => setInvitation({ ...invitation, place: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="time"
                                    value={invitation.time}
                                    onChange={(e) => setInvitation({ ...invitation, time: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    value={invitation.description}
                                    onChange={(e) => setInvitation({ ...invitation, description: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Share Invitation</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvetationForom;
