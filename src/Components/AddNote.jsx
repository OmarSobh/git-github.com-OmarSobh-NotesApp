import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../auth/AuthContext';
import '../css/AddNote.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { notes } = useContext(AuthContext);
  const { emailPass, setNotes } = useContext(AuthContext);


  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };



  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddNote = (event) => {
    event.preventDefault();
    setNotes([...notes, { email: emailPass.email, title, description }]);
    setTitle("");
    setDescription("");
  };


  const handleGoToNotes = () => {
    navigate("/notes")
  }

  return (
    <div className="addnote-container">

      <h2>Add Note</h2>
      <MDBCard >
        <form onSubmit={handleAddNote}>
          <MDBCardBody >
            <MDBCardTitle> Note title</MDBCardTitle>
            <MDBInput label='Text input' id='typeText' type="text"
              value={title}
              onChange={handleTitleChange}
              required />
            <MDBInput label='Describtion' id='typeText' value={description}
              onChange={handleDescriptionChange}
              required />
            <MDBCardText>
              you can delet notes by navigationg to Notes
            </MDBCardText>
            <MDBBtn type="submit">Add Note</MDBBtn>
            <MDBBtn onClick={handleGoToNotes}> Navigate To notes</MDBBtn>
          </MDBCardBody>
        </form>
      </MDBCard>
      
    </div>
  );
};

export default AddNote;
