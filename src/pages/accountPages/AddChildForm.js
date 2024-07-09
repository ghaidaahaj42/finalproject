import React, { useState } from 'react';

const AddChildForm = ({ addChild, setAddingChild }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      addChild({ name, questions: [  { question: 'What is your favorite color?', answer: '' },
        { question: 'What is your favorite toy?', answer: '' },{ question: 'What is your favorite color?', answer: '' }],gifts:[{
          id: 1,
          image: 'https://toysrus.co.il/media/catalog/product/cache/55a044f927b05bedf296cf15120d7cf4/6/9/693677_1.jpg',
          name: 'הרמז צעיר',
          price: '80',
          description: 'משחק קופסה בפתרון תעלומה'
        },{
          id:2,
          image: 'https://toysrus.co.il/media/catalog/product/cache/55a044f927b05bedf296cf15120d7cf4/1/7/17450_1.jpg',
          name: 'מונופול צעיר',
          price: '99',
          description: 'משחקי חברה'
        },{
          id: 3,
          image: 'https://itsplaytime.co.il/wp-content/uploads/2020/03/IMG_4758.jpg',
          name: 'לגו',
          price: '30',
          description: 'משחקי לגו'
        },{
          id:4,
          image: 'https://www.kodkod.co.il/images/itempics/1341.jpg',
          name: 'טליסמן',
          price: '120',
          description: 'משחקי חברה'
        },{
          id: 5,
          image: 'https://th.bing.com/th/id/OIP.00_yuNxck1mqMzXxnQhTaQHaHa?rs=1&pid=ImgDetMain',
          name: 'אומנות הרקמה',
          price: '80',
          description: 'משחק יצירה'
        }] });
        
        
      setAddingChild(false);
    }
  };

  return (
    <div className="add-child-form">
      <h2>הוספת ילד</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>שם הילד</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">הוספת ילד</button>
        <button type="button" className="btn btn-secondary" onClick={() => setAddingChild(false)}>ביטול</button>
      </form>
    </div>
  );
};

export default AddChildForm;
