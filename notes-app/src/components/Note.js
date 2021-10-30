import React from 'react';
import{MdDeleteForever} from 'react-icons/md';


export default function Note() {
    return (
        <div className='note'>
            <span>hello this is our note</span>
            <div className="note-footer">
                <small>13//04/2021</small>
                <MdDeleteForever className="delete-icon" size='1.3em'/>
            </div>
        </div>
    )
}
