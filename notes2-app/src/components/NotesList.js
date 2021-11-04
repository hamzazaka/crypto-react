import React from 'react'
import { MdDelete } from 'react-icons/md';
import AddNote from './AddNote';
import Note from './Note';

export default function NotesList({notes,handleSaveclick}) {
    return (
        <div className='notes-list'>
        {notes.map(note=> 
        <Note id={note.id} text={note.text} date={note.date}/>)}
        <AddNote SaveClick={handleSaveclick}/>
        </div>
    )
}
