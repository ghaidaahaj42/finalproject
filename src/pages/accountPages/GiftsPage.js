import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/GiftsPage.css'; // تأكد من وجود ملف CSS هنا
import { useChild } from '../context/ChildContext'; // استيراد الهوك
import ChildList from './ChildList';
import GiftList from './GiftList';
import AddGiftForm from './AddGiftForm';
import EditGiftForm from './EditGiftForm';
import InvetationForom from "../InvetationPages/InvetationForom";
import { color } from 'framer-motion';

const GiftsPage = () => {
  const { childrenData } = useChild(); // استخدام الهوك
  const [children, setChildren] = useState(childrenData)
  const [selectedChild, setSelectedChild] = useState(null);
  const [addingGift, setAddingGift] = useState(false);
  const [editingGift, setEditingGift] = useState(null);
  const [invite, setInvitation] = useState(false);

  const addGift = (childName, gift) => {
    setChildren(children?.map(child => 
      child.name === childName ? { ...child, gifts: [...child.gifts, gift] }  : child
    ));
    
    setAddingGift(false);
  };

  const deleteGift = (childName, giftId) => {
    setChildren(children?.map(child => 
      child.name === childName 
        ? { ...child, gifts: child.gifts.filter(gift => gift.id !== giftId) }
        : child
    ));
  };

  const updateGift = (childName, updatedGift) => {
    setChildren(children?.map(child => 
      child.name === childName 
        ? { ...child, gifts: child.gifts.map(gift => gift.id === updatedGift.id ? updatedGift : gift) }
        : child
    ));
    setEditingGift(null);
  };

  return (
    <div className="container mt-5 gifts-page">
      <h1 className="text-center mb-4">ניהול רשימות</h1>
      <h2 className="text-center mb-4">אנא לחצו על שם הילד בשביל לערוך את הרשימה שלו</h2>
      <div className="row">
        <div className="col-md-4">
          <ChildList children={children} setSelectedChild={setSelectedChild} />
        </div>
        <div className="col-md-8">
          {selectedChild && (
            <>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={() => setAddingGift(true)}>הוספת מתנה</button>
              </div>
              <GiftList className='gg'
                gifts={selectedChild?.gifts} 
                deleteGift={deleteGift} 
                setEditingGift={setEditingGift} 
                childName={selectedChild?.name}
              />
            </>
          )}
        </div>
      </div>

      {addingGift && selectedChild && (
        <AddGiftForm 
          addGift={addGift} 
          setAddingGift={setAddingGift} 
          childName={selectedChild?.name}
        />
      )}

      {editingGift && selectedChild && (
        <EditGiftForm 
          gift={editingGift} 
          updateGift={updateGift} 
          setEditingGift={setEditingGift} 
          childName={selectedChild?.name}
        />
      )} 







{selectedChild && (
  <div className="d-flex justify-content-center">
    <button className="btn btn-secondary" onClick={() => setInvitation(true)}>סיימתי ! להזמין חברים</button>
  </div>
)}
      

      {addingGift && selectedChild && (
        <AddGiftForm 
          addGift={addGift} 
          setAddingGift={setAddingGift} 
          childName={selectedChild.name} 
        />
      )}



{invite && selectedChild && (
        <InvetationForom 
        listOfGifts={selectedChild.gifts}
          childName={selectedChild.name} 
        />
      )}

    </div>
  );
};

export default GiftsPage;
