
import { useState } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

function App() {
  
  return (
    <div className="">
        <ContactCard name='hamza' email='hamza@gmail.com' age='22'/>
        <ContactCard name='john' email='john@gmail.com' age='42'/>
        <ContactCard name='adrain' email='adrain@gmail.com' age='32'/>
    </div>
  );
}

export default App;
