import "./App.css"
import { useState, useContext } from "react"
import axios from "axios"
import Login from "./Components/Login.jsx"
import Signup from "./Components/Signup.jsx"
import Profile from "./Components/Profile.jsx"
import Photo from "./Components/Photo.jsx"
import Home from "./Components/Home.jsx"
import Header from "./Components/Header.jsx"
import { AuthContext } from "./Context/AuthContext"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Link,
} from "react-router-dom"
function App() {
  const { user } = useContext(AuthContext)
  console.log(user)
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
      <Router>
        <Header />
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/home" /> : <Login />}
          ></Route>
          <Route exact path="/profile/:username" element={<Profile />} />
          <Route exact path="/:id/:photoid" element={<Photo />} />
          <Route exact path="/home" element={user ? <Home /> : <Login />} />
          <Route path="*" element={<h1>Please Login</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
