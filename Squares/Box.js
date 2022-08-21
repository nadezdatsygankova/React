import React from "react"


export default function Box(props) {
const [value, setValue] = props.on

  const styles = {
    backgroundColor: value ? "#222222" : "#cccccc"
  }

  function toggle(){
    setValue( (prevValue) => !prevValue)
  }
  return (
    <div className="box" style={styles} onClick = {toggle}> </div>
  )
}