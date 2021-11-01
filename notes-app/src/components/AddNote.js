import { useState } from "react";
import React from 'react'

export default function AddNote({handleAddNote}) {
    const [note, setNote] = useState('');
    // console.log(note);
    const handleChange = (e) => {
        setNote(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddNote(note);
    }
    return (
        <div className='note new'>
            <textarea name="" id="" cols="10" rows="8"
            placeholder='type to add a note'
            value={note}
            onChange={handleChange}>
            </textarea>
                <div className="note-footer">
                    <small>200 remaing</small>
                    {/* <p>{note}</p> */}
                    <button onClick={handleSubmit} className='save'>Save</button>
                </div>
        </div>
    )
}
