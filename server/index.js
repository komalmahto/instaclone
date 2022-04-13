const express = require("express")
const mysql = require("mysql")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({})
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
