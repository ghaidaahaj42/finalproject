import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChildList from './ChildList';
import GiftList from './GiftList';
import AddChildForm from './AddChildForm';
import AddGiftForm from './AddGiftForm';
const ListOFMygifts = () => {
  

    const [children, setChildren] = useState( [
    { 
      name: 'John', 
      gifts: [
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Toy Car', price: '$10', description: 'A small toy car.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' }
      ] 
    },
    { 
      name: 'Jane', 
      gifts: [
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Doll', price: '$15', description: 'A beautiful doll.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Puzzle', price: '$10', description: 'A challenging puzzle.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' }
      ] 
    },
    { 
      name: 'Emily', 
      gifts: [
        { image: 'https://th.bing.com/th?id=OIF.%2b%2fQFYzCc5CGPDM%2fl9GTXKQ&rs=1&pid=ImgDetMain', name: 'Drawing Kit', price: '$25', description: 'A complete drawing kit.' },
        { image: 'https://th.bing.com/th?id=OIF.%2b%2fQFYzCc5CGPDM%2fl9GTXKQ&rs=1&pid=ImgDetMain', name: 'Stuffed Animal', price: '$18', description: 'A soft stuffed animal.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' },
        { image: 'https://th.bing.com/th/id/OIP.0qgAQtV0-hV0harUOavqXAHaFZ?rs=1&pid=ImgDetMain', name: 'Building Blocks', price: '$20', description: 'A set of colorful building blocks.' }
      ] 
    },
  ]);

  const [selectedChild, setSelectedChild] = useState(null);
  const [addingChild, setAddingChild] = useState(false);
  const [addingGift, setAddingGift] = useState(false);

  const addChild = (child) => {
    setChildren([...children, child]);
  };

  const addGift = (childName, gift) => {
    setChildren(children.map(child => 
      child.name === childName ? { ...child, gifts: [...child.gifts, gift] } : child
    ));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Select a Child to View Gifts</h1>
      <div className="row mb-3">
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={() => setAddingChild(true)}>Add Child</button>
        </div>
        <div className="col-md-6 text-right">
          {selectedChild && (
            <button className="btn btn-secondary" onClick={() => setAddingGift(true)}>Add Gift</button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ChildList children={children} setSelectedChild={setSelectedChild} />
        </div>
        <div className="col-md-8">
          {selectedChild && <GiftList gifts={selectedChild.gifts} />}
        </div>
      </div>

      {addingChild && <AddChildForm addChild={addChild} setAddingChild={setAddingChild} />}
      {addingGift && selectedChild && (
        <AddGiftForm 
          addGift={addGift} 
          setAddingGift={setAddingGift} 
          childName={selectedChild.name} 
        />
      )}
    </div>
  );
};



export default ListOFMygifts;
