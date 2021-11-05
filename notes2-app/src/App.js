import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import { useState } from 'react';
import {nanoid} from 'nanoid'
import Search from './components/Search';

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

  const[searchText,setSearchText]=useState('')

  const handleSaveclick=(text)=>{
      const date=new Date().toLocaleDateString();
      const newNote={
        text:text,
        date:date
      }
      const newNotes=[...notes,newNote]
      setNotes(newNotes)
    }

    const deleteNote=(id)=>{
     const newNotes= notes.filter((note)=>note.id!==id);
     setNotes(newNotes);
    }

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText}/>
      <NotesList
      handleDeleteNote={deleteNote} handleSaveclick={handleSaveclick} notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}/>
    </div>
  );
}

export default App;
