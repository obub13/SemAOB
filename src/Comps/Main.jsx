import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextPage } from '../Contexts/ContextPageProvider';

export default function Main() {
    const navigate = useNavigate();
    const {title, desc, notes, setTitle, setDesc, setNotes, addNotes} = useContext(ContextPage);

    const btnAddNotes = () => {
        if (title && desc) {
            addNotes(title, desc);
        } 
        else {
            alert('Error');
        }
    }

  return (
    <div>
        <h1>Main</h1> <br />
        <div className="div">
        <p><label>Title: </label><input type="text" onChange={(e)=> setTitle(e.target.value)} /></p> 
        <p><label>Description: </label><input type="text"  onChange={(e)=> setDesc(e.target.value)} /> </p>
        </div>
        <button onClick={btnAddNotes}>Add</button> <br />
        <button onClick={() => navigate('/notes')}>go to notes page</button>
    </div>
  )
}
