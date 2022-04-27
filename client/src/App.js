import "./App.css"
import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import axios from "axios"
import Login from "./Components/Login.jsx"
import Signup from "./Components/Signup.jsx"
import Profile from "./Components/Profile.jsx"
import Photo from "./Components/Photo.jsx"
import Home from "./Components/Home.jsx"
import Header from "./Components/Header.jsx"
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
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/:id/:photoid" component={Photo} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/home" component={Auth(Container, true)} />
        <Route exact path="/chat" component={Auth(ChatPage, true)} />
        <Route exact path="/meet" component={Auth(Meet, true)} />
        <Route exact path="/meet/:url" component={Auth(Video, true)} />
        <Route exact path="/users" component={Auth(UsersOnline, true)} />
        <Route exact path="/notes" component={Auth(Notes, true)} /> */}
        </Switch>
      </Router>
      {/* <button onClick={display}>set</button>
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
      </div> */}
    </div>
  )
}

export default App
