const express = require("express")
const mysql = require("mysql")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6485624",
  password: "iDEhdb4ZRQ",
  database: "sql6485624",
  port: 3306,
  insecureAuth: true,
})

app.post("/login", (req, res) => {
  const username = req.body.username
  const password = req.body.password
  console.log(username + password)
})
app.post("/signup", (req, res) => {
  const username = req.body.username
  const password = req.body.password
  console.log(username + password)
  db.query(
    "INSERT INTO users(username,password) VALUES(?,?)",
    [username, password],
    (err, result) => {
      if (err) console.log(err)
      else res.send("values inserted")
    }
  )
})
app.post("/create", (req, res) => {
  const username = req.body.username
  const created_at = req.body.created_at
  console.log(username, created_at)
  db.query(
    "INSERT INTO users(username,created_at) VALUES(?,?)",
    [username, created_at],
    (err, result) => {
      if (err) console.log(err)
      else res.send("values inserted")
    }
  )
})
app.listen(3001, () => {
  console.log("started")
})
