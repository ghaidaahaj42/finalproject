import React, { useState, useEffect } from 'react';
import { useChild } from './context/ChildContext';
import ChildList from './accountPages/ChildList';
import QAList from './QAList';
import AddChildForm from './accountPages/AddChildForm';
import EditChildForm from './accountPages/EditChildForm';
import '../styles/questionPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
const QuestionsPage = () => {
  const { childrenData, addChild, updateChild, deleteChild } = useChild();
  const [selectedChild, setSelectedChild] = useState(null);
  const [addingChild, setAddingChild] = useState(false);
  const [editingChild, setEditingChild] = useState(null);
  const [localQuestions, setLocalQuestions] = useState([]);

  useEffect(() => {
    if (selectedChild) {
      setLocalQuestions(selectedChild.questions);
    }
  }, [selectedChild]);

  const updateAnswer = (question, answer) => {
    const updatedQuestions = localQuestions.map(q => 
      q.question === question ? { ...q, answer } : q
    );
    setLocalQuestions(updatedQuestions);
  };

  const handleAddChild = (newChild) => {
    // Ensure DOB is not in the future
    if (new Date(newChild.dob) > new Date()) {
      alert('Date of Birth cannot be in the future.');
      return;
    }
    
    addChild(newChild);
    setAddingChild(false);
  };

  const handleSaveChanges = () => {
    if (selectedChild) {
      updateChild(selectedChild.id, { ...selectedChild, questions: localQuestions });
      setSelectedChild({ ...selectedChild, questions: localQuestions });
    }
    alert("Changes saved successfully.");
  };

  return (
    <div className="questions-page">
      <h1 className="page-title">Answer Questions for Each Child</h1>
      <div className="actions">
      <button className="btn-add-child" onClick={() => setAddingChild(true)}>
      Add Child
      <AddIcon style={{ marginRight: '8px' }} />
    
    </button>
        {selectedChild && (
          <>
    <button className="btn-edit-child" onClick={() => setEditingChild(selectedChild)}>
    Edit Child
      <EditIcon style={{ marginRight: '8px' }} />
  
    </button>          </>
        )}
      </div>
      <div className="content">
        <div className="child-list section">
          <ChildList children={childrenData} setSelectedChild={setSelectedChild} />
        </div>
        <div className="qa-section section">
          {selectedChild && (
            <QAList 
              questions={localQuestions} 
              updateAnswer={updateAnswer} 
              childName={selectedChild.name}
            />
          )}
        </div>
      </div>

      {addingChild && (
        <div className="modal-overlay" onClick={() => setAddingChild(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Child</h2>
              <FontAwesomeIcon 
                icon={faTimes} 
                className="close-icon" 
                onClick={() => setAddingChild(false)} 
              />
            </div>
            <AddChildForm 
              addChild={handleAddChild} 
              setAddingChild={setAddingChild} 
            />
          </div>
        </div>
      )}

      {editingChild && (
        <div className="modal-overlay" onClick={() => setEditingChild(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <EditChildForm 
              child={editingChild} 
              updateChild={updateChild} 
              setEditingChild={setEditingChild} 
              deleteChild={deleteChild}
            />
          </div>
        </div>
      )}

{selectedChild && (
          <>
          <div className='actions'>
            <button className="btn-save-changes" onClick={handleSaveChanges}>Save Changes</button>
          </div>
            
          </>
        )}
    </div>
  );
};

export default QuestionsPage;
