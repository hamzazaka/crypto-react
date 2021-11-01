import logo from './logo.svg';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import NotesList from './components/NotesList';

function App() {

  const [notes, setNotes] = useState([
    {
    id:nanoid(),
    text:'this is my first note',
    date: '20/04/2021',
    },
    {
    id:nanoid(),
    text:'this is my second note',
    date: '20/04/2021',
    },
    {
    id:nanoid(),
    text:'this is my third note',
    date: '20/04/2021',
    },
    {
    id:nanoid(),
    text:'this is my fourth note',
    date: '20/04/2021',
    }
]);

const addNote = (text) => {
  const date=new Date().toLocaleString()+' ';
  const newNote = {
    id: nanoid(),
    text: text,
    date: date
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const deleteNote = (id) => {
 const newNotes= notes.filter(note=>note.id!==id);
 setNotes(newNotes);
}


  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
