import React, { useState } from 'react'

export default function AddNote({SaveClick}) {
    const [noteText,setNoteText]=useState('');

    const handleChange=(e)=>{
        setNoteText(e.target.value)
    }
   const handleSaveclick=()=>{
        SaveClick(noteText)
    }

    return (
        <div className='note new'>
            <textarea onChange={handleChange} value={noteText}  rows='8' cols="10" placeholder='Type to add a note ...'></textarea>
            <div className="note-footer">
                <small>200 remaing</small>
                <button className='note-button' onClick={handleSaveclick}>Add</button>
            </div>
        </div>
    )
}
