import React, { useState } from 'react'

export default function ContactCard({name,email,age}) {
    const[showAge,setShowAge]=useState('');

    return (
        <div className='contact-card'>
             <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="useer-details">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <button onClick={()=>setShowAge(!showAge)}>Show Age</button>
        {showAge&&<p>Age: {age}</p> }
        </div>
        </div>
    )
}
