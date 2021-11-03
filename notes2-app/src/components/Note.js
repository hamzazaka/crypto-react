import React from 'react'
import { MdDelete } from 'react-icons/md';


export default function Note() {
    return (
        <div className='note'>
            <span>hello this is our first note</span>
            <div className="note-footer">
                <small>20/12/2021</small>
                <MdDelete className='delete-icon' size='1.3rem'/>
            </div>
        </div>
    )
}
