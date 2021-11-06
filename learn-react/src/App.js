
import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App({handleClickButton,helloname}) {
  let title='hello ia ma hamza'

  const [name,setName]=useState(title);


  const handleClick=()=>{
    setName('hello i am changed')
  }
  
  return (
    <div className="App">
     
      <h1>{name}</h1>
      <button onClick={()=>handleClick()}>click me</button>
      <Button helloname={title} handleClickButton={handleClick}/>
    </div>
  );
}

export default App;
