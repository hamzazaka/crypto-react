import { useState } from "react";
import React from 'react'

export default function AddNote({handleAddNote}) {
    const [note, setNote] = useState('');
    const characterLimit=200;


    const handleChange = (e) => {
        if(characterLimit-e.target.value.length>=0){
        setNote(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        if(note.trim().length > 0) {
            e.preventDefault();
            handleAddNote(note);
            setNote('');
        }
    }
    return (
        <div className='note new'>
            <textarea name="" id="" cols="10" rows="8"
            placeholder='type to add a note'
            value={note}
            onChange={handleChange}>
            </textarea>
                <div className="note-footer">
                    <small>{characterLimit-note.length} Remaining</small>
                    <button onClick={handleSubmit} className='save'>Save</button>
                </div>
        </div>
    )
}
