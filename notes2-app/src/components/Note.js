import React from 'react'
import { MdDelete } from 'react-icons/md';


export default function Note({id,text,date}) {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDelete className='delete-icon' size='1.3rem'/>
            </div>
        </div>
    )
}
