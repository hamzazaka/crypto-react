import React from 'react'
import AddNote from './AddNote';
import Note from './Note';

export default function NotesList({notes,handleSaveclick,handleDeleteNote}) {
    return (
        <div className='notes-list'>
        {notes.map(note=> 
        <Note handleDeleteNote={handleDeleteNote} id={note.id} text={note.text} date={note.date}/>)}
        <AddNote SaveClick={handleSaveclick}/>
        </div>
    )
}
