import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './InvitationPage.css'; // Ensure the path to your CSS file is correct

const InvitationPage = () => {
    const location = useLocation();
    const { name, place, time, description, list } = location.state || { name: "", place: '', time: '', description: '', list: [] };
    const [isGiftOpen, setIsGiftOpen] = useState(false);

    const handleGiftClick = () => {
        setIsGiftOpen(true);
    };

    return (
        <div className="container">
        <div className="home-content text-center mb-5">
          <div className="card-body">
                <h1>הזמנה למסיבת יום הולדת 🎉</h1>
                <h4>אתם מוזמנים לחגוג איתנו את יום הולדתו ה-8 של {name}!</h4>
                <h4>📅 תאריך: <strong>{time}</strong></h4>
                <h4>🕒 שעה: <strong>{time}</strong></h4>
                <h4>📍 מקום: <strong>{place}</strong></h4>
                <h4>בואו לשמוח, לרקוד ולהפתיע את {name} במתנות שהוא באמת אוהב!</h4>
                <h5>הכנו לכם רשימת מתנות מושלמת מתחומי העניין של {name}, כך שתוכלו למצוא את המתנה שתשמח אותו במיוחד.</h5>
                {description && <p><strong>Additional Details:</strong> {description}</p>}

                {list.length > 0 && (
                    <div>
                        <ul>
                            {list.map((item, index) => (
                                <li key={index}>
                                    <p><strong>Name:</strong> {item.name}</p>
                                    <p><strong>Price:</strong> {item.price}</p>
                                    <p><strong>Description:</strong> {item.description}</p>
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
