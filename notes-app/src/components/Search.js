import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function search({handleSearchNote}) {
    return (
        < div className='search'>
            <MdSearch className='search-icons' size='1.3rem'/>
            <input onChange={(e)=>handleSearchNote(e.target.value)} type='text' placeholder='Search' className='search-input'/>
        </div>
    )
}
