import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Make sure to install react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Styles for react-datepicker

const InvitationForm = ({ listOfGifts, childName }) => {
    const [invitation, setInvitation] = useState({
        name: childName,
        age: '',
        place: '',
        date: null,
        time: '',
        description: '',
        list: listOfGifts
    });

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
                        <h5 className="modal-title">הזמנה עבור {childName}</h5>
                        <button type="button" className="btn-close" onClick={() => navigate('/')}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">גיל</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="age"
                                    value={invitation.age}
                                    onChange={(e) => setInvitation({ ...invitation, age: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="place" className="form-label">מיקום</label>
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
                                <label className="form-label">תאריך</label><br />
                                <DatePicker
                                    selected={invitation.date}
                                    onChange={(date) => setInvitation({ ...invitation, date })}
                                    dateFormat="yyyy-MM-dd"
                                    className="form-control"
                                    placeholderText="בחר תאריך"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">שעה</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="time"
                                    value={invitation.time}
                                    onChange={(e) => setInvitation({ ...invitation, time: e.target.value })}
                                    placeholder="HH:mm"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">תיאור (אופציונלי)</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    value={invitation.description}
                                    onChange={(e) => setInvitation({ ...invitation, description: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">שיתוף ההזמנה</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitationForm;
