import React, { useContext } from 'react';
import { ContextPage } from '../Contexts/ContextPageProvider';

export default function NoteItem(props) {
    const {notes, deleteNote} = useContext(ContextPage);
    console.log(props.title);
    console.log(props.notes);
    console.log(props.id);
  return (
    <div>
        <p>{props.title} | {props.desc} | <button onClick={() => deleteNote(props.id)}>X</button></p>
    </div>
  )
}
