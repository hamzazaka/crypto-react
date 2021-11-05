import React from 'react'

export default function Header({handleDarkMode}) {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={()=>handleDarkMode((previousDarkmode)=>!previousDarkmode)} className='note-button'>Toggle Mode</button>
            
        </div>
    )
}
