import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './InvitationPage.css'; // Ensure the path to your CSS file is correct
import DatePicker from 'react-datepicker'; // Import react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Import react-datepicker styles

const InvitationPage = () => {
    const location = useLocation();
    const { name, age,mydate, place, time, description, list } = location.state || { name: "", age: '', place: '', time: '',mydate:'', description: '', list: [] };
    const [isGiftOpen, setIsGiftOpen] = useState(false);
    let DateArr = Date(mydate).toString().split(" ")
    const handleGiftClick = () => {
        setIsGiftOpen(true);
    };

    return (
        <div className="container">
            <div className="home-content text-center mb-5" style={{ backgroundColor: 'transparent' }}>
                <div className="card-body">
                    <h1>הזמנה למסיבת יום הולדת 🎉</h1>
                    <h4>אתם מוזמנים לחגוג איתנו את יום הולדתו ה-{age} של {name}!</h4>
                    <h4>📅 תאריך ושעה: <strong>{time} {DateArr[0]} {DateArr[2]} {DateArr[1]}  </strong></h4>
                    <h4>📍 מקום: <strong>{place}</strong></h4>
                    <h4>בואו לשמוח, לרקוד ולהפתיע את {name} במתנות שהוא באמת אוהב!</h4>
                    {description && <p><strong>Additional Details:</strong> {description}</p>}

                    {list && list.length > 0 && (
                        <div>
                            <ul className="item-list">
                                {list.map((item, index) => (
                                    <li key={index} className="item">
                                        <p><strong>שם:</strong> {item.name}</p>
                                        <p><strong>מחיר:</strong> {item.price}</p>
                                        <p><strong>תיאור:</strong> {item.description}</p>
                                        <img src={item.image} alt={item.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className={`gift-container ${isGiftOpen ? 'gift-open' : ''}`} onClick={handleGiftClick}>
                        <div className="gift-lid"></div>
                        <div className="gift-box"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitationPage;
