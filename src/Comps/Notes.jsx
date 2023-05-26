import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextPage } from '../Contexts/ContextPageProvider';
import NoteItem from './NoteItem';

export default function Notes() {
    const navigate = useNavigate();
    const {notes} = useContext(ContextPage);

    let notesOutput = notes.map(note => 
        <NoteItem key={note.id} id={note.id} title={note.title} desc={note.desc}/>);

  return (
    <div>
        <h1>Notes</h1> <br />
        <div className="div">
        {notesOutput} 
        </div>
        <button onClick={() => navigate('/main')}>go to main page</button>
    </div>
  )
}
