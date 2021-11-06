import React from 'react'

export default function Button({handleClickButton,helloname}) {
    return (
        <div>
            <h1>{helloname}</h1>
            <button onClick={handleClickButton}>clicke me again</button>
        </div>
    )
}
