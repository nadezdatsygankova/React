import React from "react"
import boxes from "./boxes"
import Box from './Box'

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id){
      setSquares((prevSquare) =>{
        return prevSquare.map((item) =>{
          return item.id === id ? {...item, on: !item.on} : item
        })
      })
    }
    const squareElements = squares.map(square => (
        <Box
        key = {square.id}
        id = {square.id}
        on = {square.on}
        toggle = {toggle}/>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
