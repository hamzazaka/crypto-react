import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function search() {
    return (
        < div className='search'>
            <MdSearch className='search-icons' size='1.3rem'/>
            <input type='text' placeholder='Search' className='search-input'/>
        </div>
    )
}
