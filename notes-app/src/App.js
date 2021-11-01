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
    date: new Date().toLocaleString() + '',
    },
    {
    id:nanoid(),
    text:'this is my second note',
    date: new Date().toLocaleString() + '',
    },
    {
    id:nanoid(),
    text:'this is my third note',
    date: new Date().toLocaleString() + '',
    },
    {
    id:nanoid(),
    text:'this is my fourth note',
    date: new Date().toLocaleString() + '',
    }
]);

console.log(notes);


  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
