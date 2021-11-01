import logo from './logo.svg';
import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const [notes, setNotes] = useState([
    {
    id:nanoid(),
    text:'this is my first note',
    date: '20/04/2021',
    },
   
]);

const [searchText,setSearchText]=useState('');
const[darkmode,setDarkmode]=useState(false);


useEffect(()=>{
  const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'))
  if(savedNotes) setNotes(savedNotes)
},[])


useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes])

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
    <div className={`${darkmode && `darkmode`}`}>
    <div className="container">
      <Header handleToggleDarkMode={setDarkmode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((notes)=>notes.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
    </div>
  );
}

export default App;
