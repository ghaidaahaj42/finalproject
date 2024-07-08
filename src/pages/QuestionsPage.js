import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChildList from './ChildList';
import QAList from './QAList';
import AddChildForm from './AddChildForm';
import EditChildForm from './EditChildForm';

const QuestionsPage = () => {
  const [children, setChildren] = useState([
    { 
      name: 'John', 
      questions: [
        { question: 'What is your favorite color?', answer: '' },
        { question: 'What is your favorite toy?', answer: '' },
      ]
    },
    { 
      name: 'Jane', 
      questions: [
        { question: 'What is your favorite food?', answer: '' },
        { question: 'What is your favorite game?', answer: '' },
      ]
    }
  ]);

  const [selectedChild, setSelectedChild] = useState(null);
  const [addingChild, setAddingChild] = useState(false);
  const [editingChild, setEditingChild] = useState(null);

  const addChild = (child) => {
    setChildren([...children, child]);
  };

  const updateChild = (oldName, newName) => {
    setChildren(children.map(child => 
      child.name === oldName ? { ...child, name: newName } : child
    ));
  };

  const deleteChild = (childName) => {
    setChildren(children.filter(child => child.name !== childName));
    setSelectedChild(null);
  };

  const updateAnswer = (childName, question, answer) => {
    setChildren(children.map(child => 
      child.name === childName 
        ? { ...child, questions: child.questions.map(q => q.question === question ? { ...q, answer } : q) }
        : child
    ));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Answer Questions for Each Child</h1>
      <div className="row mb-3">
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={() => setAddingChild(true)}>Add Child</button>
        </div>
        <div className="col-md-6 text-right">
          {selectedChild && (
            <button className="btn btn-secondary" onClick={() => setEditingChild(selectedChild)}>Edit Child</button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ChildList children={children} setSelectedChild={setSelectedChild} />
        </div>
        <div className="col-md-8">
          {selectedChild && (
            <QAList 
              questions={selectedChild.questions} 
              updateAnswer={updateAnswer} 
              childName={selectedChild.name}
            />
          )}
        </div>
      </div>

      {addingChild && <AddChildForm addChild={addChild} setAddingChild={setAddingChild} />}
      {editingChild && (
        <EditChildForm 
          child={editingChild} 
          updateChild={updateChild} 
          setEditingChild={setEditingChild} 
          deleteChild={deleteChild}
        />
      )}
    </div>
  );
};

export default QuestionsPage;
