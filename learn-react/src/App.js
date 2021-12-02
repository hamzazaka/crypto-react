
import { useState } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

function App() {
  const arr1=[1,2,3,4];
  const arr2=[2,3,4,5];
  const arr3=[...arr1,...arr2]
  console.log(arr3)
  
  return (
   <h1>hello world</h1>
  );
}

export default App;
