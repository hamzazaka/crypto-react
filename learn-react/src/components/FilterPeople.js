import React from 'react'

export default function FilterPeople({people,isPending}) {
    console.log(people)
    return (
        <div className='app'>
            <h1>Filter People With J and Blue Eyes</h1>
            {isPending && <h1>Loading Data....</h1>}
            {people.map(p=>(
                <h4>Name is <span>{p.name}</span> and the eyes are <span>{p.eye_color}</span> </h4>
            ))}
        </div>
    )
}
