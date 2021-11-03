import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import { useState } from 'react';
import {nanoid} from 'nanoid'

function App() {

  const [notes,setNotes]=useState([
    {
      id:nanoid(),
      text:'this is my first note',
      date:'15/04/2021'
    },
    {
      id:nanoid(),
      text:'this is my second note',
      date:'16/08/2019'
    },
    {
      id:nanoid(),
      text:'this is my third note',
      date:'12/07/2021'
    },
  ]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
