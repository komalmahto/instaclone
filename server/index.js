const express = require("express")
const mysql = require("mysql")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "717368.km",
  database: "ig_clone",
  insecureAuth: true,
})
app.post("/signup", (req, res) => {
  const username = req.body.username
  const password = req.body.password
  console.log(username, password)
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
  console.log(username, password)
  db.query("select * from users where username=?", username, (err, result) => {
    console.log(result)
    if (err) {
      console.log(err)
    } else {
      if (result.length > 0) {
        if (password === result[0].password) {
          console.log("my")
          var ff = []
          ff.push(result[0])
          res.json({
            loggedin: true,
            userData: ff,
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
app.post("/post", (req, res) => {
  const image_url = req.body.img_url
  const user_id = req.body.user_id
  console.log(req.body)
  db.query(
    "INSERT INTO photos(image_url,user_id) VALUES(?,?)",
    [image_url, user_id],
    (err, result) => {
      if (err) console.log(err)
      else res.send("values inserted")
    }
  )
})
app.listen(3001, () => {
  console.log("started")
})
