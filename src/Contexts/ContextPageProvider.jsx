import React, { createContext, useState } from 'react';

//creating object as createContext
export const ContextPage = createContext();

export default function ContextPageProvider(props) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  const [users, setUsers] = useState([]);

  const addUsers = (email, password) => {
    let newUsers = [...users, {userEmail: email, userPassword: password}];
    setUsers(newUsers);
    console.log(newUsers);
  }

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(notes.length);

  const addNotes = (title, desc) => {
    let newNotes = [...notes, {id: id+1, title, desc}];
    setNotes(newNotes);
    setId(prevId => prevId + 1);
    console.log(newNotes);
  }

  const deleteNote = (deletedNoteId) => {
    let noteToDelete = notes.filter(note => note.id === deletedNoteId);
    let newNotes = [...notes.filter(note => note.id !== deletedNoteId)];
    setNotes(newNotes);
  }

  return (
    <ContextPage.Provider value={{email, password, confirm, users, title, desc, notes, id, setEmail, setPassword, setConfirm, setUsers, addUsers, setTitle, setDesc, setNotes, addNotes, setId, deleteNote}}>
      {props.children}
    </ContextPage.Provider>
  )
}
