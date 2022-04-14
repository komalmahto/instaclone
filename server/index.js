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
app.post("/signup", (req, res) => {
  const username = req.body.username
  const password = req.body.password

  db.query(
    "INSERT INTO users (username,password) values(?,?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})
app.get("/login/:name/:pass", (req, res) => {
  const username = req.params.name
  const password = req.params.pass
  console.log(name)
  db.query("select * from users where username=?", username, (err, result) => {
    console.log(result)
    if (err) {
      console.log(err)
    } else {
      if (result.length > 0) {
        if (password === result[0].password) {
          res.json({
            loggedin: true,
            name: username,
            image: result[0].profile,
            message: "logged in successfully",
          })
        } else {
          res.json({
            loggedin: false,
            message: "incorrect password",
          })
        }
      } else {
        res.json({
          message: "user doesn't exist",
        })
      }
    }
  })
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
