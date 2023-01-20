import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import "../css/Notes.css";
import { MDBBtn, MDBCard, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

const Notes = () => {
  const { notes, setNotes } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      < MDBCard>
        <MDBListGroup flush>
          


          <ul>
            {notes.length > 0 ? (
              notes.map((note, index) => (
                <li key={index}>
                  <MDBListGroupItem>
                    titel : 
                  {note.title} -
                  <div className="description">disc :{note.description}</div>
                  <span onClick={() => handleDeleteNote(index)} className="delete-icon " >
                    Delete
                  </span>
                  </MDBListGroupItem>
                  
                </li>
              ))
            ) : (
              <li>Ther is No Notes</li>
            )}
          </ul>
        </MDBListGroup>
      </MDBCard>
      
      <MDBBtn onClick={() => navigate("/AddNote")}  className="mb-4 w-20">Go back</MDBBtn>
    </div>
  );
};

export default Notes;
