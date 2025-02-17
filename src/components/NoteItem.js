import React,{ useContext } from "react";
import UserContext from "../context/notes/UserContext";

const NoteItem = (props) => {
  const context = useContext(UserContext);
  const {deleteNote}=context;
  const { note } = props;

  return (
    <div className="col-md-3"> 
        <div className="card my-3"> 
            <div className ="card-body">
            <h5 className ="card-title">{note.title}</h5>
            <p className ="card-text">{note.description}</p> 
            <i className="far fa-trash-alt mx-2" onClick={()=>(deleteNote(note._id))}></i>
            <i className="fa-solid fa-user-pen mx-2"></i>
            </div>
        </div>
    </div>
)
};

export default NoteItem;
