import React from 'react';
import { useLocation } from 'react-router-dom';

const InvitationPage = () => {
    const location = useLocation();
    const { name, place, time, description, list } = location.state || { name: "", place: '', time: '', description: '', list: [] };

    return (
        <div>
            <h1>Invitation Details for {name}</h1>
            <h4>We would love to invite you to {name}</h4>
            <h4>That will take place at <strong>{place}</strong></h4>
            <h4>At <strong>{time}</strong> o'clock</h4>
            {description && <p><strong>Additional Details:</strong> {description}</p>}

            {list.length > 0 && (
                <div>
                    <h2>{name} would love to get:</h2>
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
        </div>
    );
};

export default InvitationPage;
