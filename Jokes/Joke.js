import React from 'react'

export default function Joke (props){
    return(
        <div className='block'>
         {props.setup && <h3>Setup: {props.setup}</h3>}
           <p> {props.punchline}</p>    
        </div>
    )
}
