import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/GiftsPage.css'; // تأكد من وجود ملف CSS هنا
import ChildList from './ChildList';
import GiftList from './GiftList';
import AddGiftForm from './AddGiftForm';
import EditGiftForm from './EditGiftForm';

const GiftsPage = () => {
  const [children, setChildren] = useState([
    { 
      name: 'John', 
      gifts: [
        { id: 1, image: 'https://www.bing.com/th?id=OIP.qMMxYNHbB7RbamBtkzzUSAHaFl&w=138&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', name: 'Toy Car', price: '$10', description: 'A small toy car.' },
        { id: 2, image: 'https://www.bing.com/th?id=OIP.qMMxYNHbB7RbamBtkzzUSAHaFl&w=138&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' }
      ] 
    },
    { 
      name: 'Jane', 
      gifts: [
        { id: 1, image: 'https://www.bing.com/th?id=OIP.qMMxYNHbB7RbamBtkzzUSAHaFl&w=138&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', name: 'Doll', price: '$15', description: 'A beautiful doll.' },
        { id: 2, image: 'https://www.bing.com/th?id=OIP.qMMxYNHbB7RbamBtkzzUSAHaFl&w=138&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', name: 'Puzzle', price: '$10', description: 'A challenging puzzle.' }
      ] 
    }
  ]);

  const [selectedChild, setSelectedChild] = useState(null);
  const [addingGift, setAddingGift] = useState(false);
  const [editingGift, setEditingGift] = useState(null);

  const addGift = (childName, gift) => {
    setChildren(children.map(child => 
      child.name === childName ? { ...child, gifts: [...child.gifts, gift] } : child
    ));
    setAddingGift(false);
  };

  const deleteGift = (childName, giftId) => {
    setChildren(children.map(child => 
      child.name === childName 
        ? { ...child, gifts: child.gifts.filter(gift => gift.id !== giftId) }
        : child
    ));
  };

  const updateGift = (childName, updatedGift) => {
    setChildren(children.map(child => 
      child.name === childName 
        ? { ...child, gifts: child.gifts.map(gift => gift.id === updatedGift.id ? updatedGift : gift) }
        : child
    ));
    setEditingGift(null);
  };

  return (
    <div className="container mt-5 gifts-page">
      <h1 className="text-center mb-4">Select a Child to View and Manage Gifts</h1>
      <div className="row">
        <div className="col-md-4">
          <ChildList children={children} setSelectedChild={setSelectedChild} />
        </div>
        <div className="col-md-8">
          {selectedChild && (
            <>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={() => setAddingGift(true)}>Add Gift</button>
              </div>
              <GiftList 
                gifts={selectedChild.gifts} 
                deleteGift={deleteGift} 
                setEditingGift={setEditingGift} 
                childName={selectedChild.name}
              />
            </>
          )}
        </div>
      </div>

      {addingGift && selectedChild && (
        <AddGiftForm 
          addGift={addGift} 
          setAddingGift={setAddingGift} 
          childName={selectedChild.name}
        />
      )}

      {editingGift && selectedChild && (
        <EditGiftForm 
          gift={editingGift} 
          updateGift={updateGift} 
          setEditingGift={setEditingGift} 
          childName={selectedChild.name}
        />
      )}
    </div>
  );
};

export default GiftsPage;
