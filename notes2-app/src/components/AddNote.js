import React, { useState } from 'react'

export default function AddNote({SaveClick}) {
    const [noteText,setNoteText]=useState('');
    const characterLimit=200;

    const handleChange=(e)=>{
        if(characterLimit-e.target.value.length>=0){
            setNoteText(e.target.value)
        }
    }
   const handleSaveclick=()=>{
        if(noteText.trim().length>0){
            SaveClick(noteText);
            setNoteText('');
        }
    }

    return (
        <div className='note new'>
            <textarea onChange={handleChange} value={noteText}  rows='8' cols="10" placeholder='Type to add a note ...'></textarea>
            <div className="note-footer">
                <small>{characterLimit-noteText.length} remaning</small>
                <button className='note-button' onClick={handleSaveclick}>Add</button>
            </div>
        </div>
    )
}
