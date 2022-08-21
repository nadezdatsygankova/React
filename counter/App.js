export default function App() {
  const [count, setCount] = React.useState(0)

  function minus () {
      setCount((prevCount) => prevCount - 1)
  }
  function plus () {
      setCount((prevCount) => prevCount + 1)
  }

  return (
      <div className="counter">
          <button onClick = {minus} className="counter--minus">–</button>
          <div className="counter--count">
              <h1>{count}</h1>
          </div>
          <button onClick = {plus} className="counter--plus">+</button>
      </div>
  )
}