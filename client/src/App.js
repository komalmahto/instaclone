import "./App.css"
import { useState } from "react"
import axios from "axios"
function App() {
  const [x, setx] = useState()
  const [y, sety] = useState()
  const display = () => {
    axios
      .post("http://localhost:3001/create", {
        username: "komalmahto",
        created_at: "13apr,2022",
      })
      .then(() => {
        console.log("success")
      })
  }
  return (
    <div className="App">
      <label>x</label>
      <input
        type="text"
        onChange={(e) => {
          setx(e.target.value)
        }}
      ></input>
      <label>y</label>
      <input
        type="text"
        onChange={(e) => {
          sety(e.target.value)
        }}
      ></input>
      <button onClick={display}>set</button>
    </div>
  )
}

export default App
