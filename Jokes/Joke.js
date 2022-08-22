import React from 'react'

export default function Joke(props) {

    const [isShown, setIsShown] = React.useState('false')
    function toggle() {
        setIsShown((prevValue) => !prevValue)
    }

    return (
        <div className='block'>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p> {props.punchline}</p>}
            <button onClick={toggle}> {isShown ? 'Show' : 'Hide'} Punchline </button>
        </div>
    )
}
