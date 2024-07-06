import React from 'react';
import '../src/styles/GiftList.css';

const GiftList = ({ gifts }) => {
  return (
    <div>
      <h2>Gifts</h2>
      <div className="row">
        {gifts.map((gift, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="gift-card">
              <img src={gift.image} alt={gift.name} />
              <div className="gift-card-body">
                <h5 className="gift-card-title">{gift.name}</h5>
                <p className="gift-card-price"><strong>Price:</strong> {gift.price}</p>
                <p className="gift-card-description"><strong>Description:</strong> {gift.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftList;
