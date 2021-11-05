import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search() {
    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3rem'/>
            <input type='text' placeholder='type to Search.....' className='search-input'/>
        </div>
    )
}
