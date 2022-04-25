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
  console.log("aya")
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
  console.log("aya")
  const image_url = req.body.img_url
  const user_id = req.body.user_id
  const username = req.body.username
  console.log(req.body)
  db.query(
    "INSERT INTO photos(image_url,user_id,username) VALUES(?,?,?)",
    [image_url, user_id, username],
    (err, result) => {
      if (err) console.log(err)
      else res.send("values inserted")
    }
  )
})
app.get("/getposts/:id", (req, res) => {
  const id = req.params.id
  db.query("select * from photos where user_id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      //console.log(result)
      const photos = []
      result.map((item, val) => {
        photos.push({ id: item.id, image_url: item.image_url })
      })
      console.log(photos)
      res.json({
        photos: photos,
      })
    }
  })
})
app.get("/getpost/:id/:photoid", (req, res) => {
  const id = req.params.id
  const photoid = req.params.photoid
  //console.log(id, photoid)
  db.query(
    "select image_url from photos where user_id=? and id=?",
    [id, photoid],
    (err, result) => {
      res.json({
        photos: result[0].image_url,
      })
    }
  )
})
var arr = []
var finalResult = []
app.get("/getposts", (req, res) => {
  //console.log("aya")

  db.query("select id, image_url,username from photos ", (err, result) => {
    arr.push(result)
    console.log(result)
    for (let i = 0; i < arr[0].length; i++) {
      db.query(
        "select username from users where id in (select user_id from likes where photo_id=?)",
        arr[0][i].id,
        (err, result2) => {
          var obj = {}
          var usernames = []
          result2.map(({ username }) => {
            usernames.push(username)
          })

          //to find the creater of post
          obj["id"] = arr[0][i].id

          obj["image_url"] = arr[0][i].image_url
          obj["likedUsers"] = usernames
          obj["postMadeBy"] = arr[0][i].username
          db.query(
            "select comment_text,username from comments where photo_id=?",
            arr[0][i].id,
            (err, result3) => {
              const comments = []
              result3.map((item, key) => {
                comments.push(item)
              })
              obj["comments"] = comments
              finalResult.push(obj)
            }
          )
          //console.log(obj)
        }
      )
    }
    //console.log(arr[0][1])
    //console.log(finalResult)
    res.json(finalResult)
  })
})
app.post("/comment", (req, res) => {
  const comment = req.body.comment
  const userid = req.body.id
  const photoid = req.body.photoid
  const username = req.body.username
  db.query(
    "INSERT INTO comments(comment_text,photo_id,user_id,username) VALUES(?,?,?,?)",
    [comment, photoid, userid, username],
    (err, result) => {
      console.log(result)
      if (err) console.log(err)
      else res.send("values inserted")
    }
  )
})
app.post("/likes", (req, res) => {
  //console.log(req.body)

  db.query(
    "INSERT INTO likes(user_id,photo_id) VALUES(?,?)",
    [req.body.id, req.body.photoid],
    (err, result) => {
      db.query(
        "select count(*) as count from likes where photo_id=?",
        req.body.photoid,
        (err, result) => {
          console.log(result)
          res.send({
            count: result[0].count,
            users: ["komal", "rohan"],
          })
        }
      )
      // if (err) console.log(err)
      // else res.send("values inserted")
    }
  )
})
app.listen(3001, () => {
  console.log("started")
})
