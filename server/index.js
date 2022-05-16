const express = require("express")
const mysql = require("mysql")
const app = express()
const cors = require("cors")
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    method: ["GET", "POST"],
  })
)
app.use(express.json())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "717368.km",
  database: "ig_clone",
  insecureAuth: true,
})

app.post("/api/login", (req, res) => {
  const username = req.body.username
  const password = req.body.password
  //console.log(username, password)
  db.query("select * from users where username=?", username, (err, result) => {
    //console.log(result)
    if (err) {
      console.log(err)
    } else {
      if (result.length > 0) {
        if (password === result[0].password) {
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
app.post("/api/signup", (req, res) => {
  console.log("aya")
  const username = req.body.username
  const password = req.body.password
  //console.log(username + password)
  db.query(
    "INSERT INTO users(username,password) VALUES(?,?)",
    [username, password],
    (err, result) => {
      if (err) console.log(err)
      else res.send("values inserted")
    }
  )
})
app.post("/api/post", (req, res) => {
  //console.log("aya")
  const image_url = req.body.img_url
  const user_id = req.body.user_id
  const username = req.body.username
  //console.log(req.body)
  db.query(
    "INSERT INTO photos(image_url,user_id,username) VALUES(?,?,?)",
    [image_url, user_id, username],
    (err, result) => {
      if (err) console.log(err)
      else res.send("values inserted")
    }
  )
})

getposts = (username) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from photos where username=?",
      username,
      (err, result) => {
        if (err) {
          return reject(err)
        }
        return resolve(result)
      }
    )
  })
}
comments = (photosData, i) => {
  //console.log(photosData[0])
  return new Promise((resolve, reject) => {
    db.query(
      "select * from comments where photo_id=?",
      photosData[i].id,
      (err, result) => {
        if (err) {
          return reject(err)
        }
        return resolve(result)
      }
    )
  })
}
followee_username = (username) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from follows where followee_username=?",
      username,
      (err, result) => {
        if (err) {
          return reject(err)
        }
        return resolve(result)
      }
    )
  })
}
follower_username = (username) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from follows where follower_username=?",
      username,
      (err, result) => {
        if (err) {
          return reject(err)
        }
        return resolve(result)
      }
    )
  })
}
app.get("/api/getposts/:username", async (req, res) => {
  const username = req.params.username
  const photosData = []
  const commentsData = []
  const followerData = []
  const followingsData = []
  try {
    const result1 = await getposts(username)
    //console.log(result1)
    photosData.push(...result1)
    for (let i = 0; i < photosData.length; i++) {
      const result2 = await comments(photosData, i)
      commentsData.push(result2)
      //console.log(result2)
    }
    const result3 = await followee_username(username)
    followerData.push(...result3)
    //console.log(result3)
    const result4 = await follower_username(username)
    followingsData.push(...result4)
    res.json({
      photos: photosData,
      comments: commentsData,
      followers: followerData,
      followings: followingsData,
    })
  } catch (err) {
    console.log(err)
  }
  // comments = []
  // followers = []
  // followings = []
  // //console.log("yaa")
  // db.query("select * from photos where username=?", username, (err, result) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     //console.log(result)

  //     for (let i = 0; i < result.length; i++) {
  //       db.query(
  //         "select * from comments where photo_id=?",
  //         result[i].id,
  //         (err, result1) => {
  //           //console.log(result1)
  //           comments.push(result1)
  //         }
  //       )
  //     }
  //     db.query(
  //       "select * from follows where followee_username=?",
  //       [username],
  //       (err, result2) => {
  //         //(result2)
  //         followers.push(result2)
  //         if (err) console.log(err)
  //       }
  //     )
  //     db.query(
  //       "select * from follows where follower_username=?",
  //       [username],
  //       (err, result3) => {
  //         //console.log(result3)
  //         followings.push(result3)
  //         if (err) console.log(err)
  //       }
  //     )
  //     res.json({
  //       photos: result,
  //       comments: comments,
  //       followers: followers[0],
  //       followings: followings[0],
  //     })
  //   }
  // })
})
app.get("/api/getpost/:id/:photoid", (req, res) => {
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

func1 = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "select id, image_url,username,created_at from photos ",
      (err, result) => {
        if (err) {
          return reject(err)
        }
        return resolve(result)
      }
    )
  })
}
func2 = (arr, i) => {
  //console.log(i, arr[i])
  return new Promise((resolve, reject) => {
    db.query(
      "select username from users where id in (select user_id from likes where photo_id=?)",
      arr[i].id,
      (err, result) => {
        if (err) {
          return reject(err)
        } else {
          var obj = {}
          var usernames = []
          result.map(({ username }) => {
            usernames.push(username)
          })
          obj["id"] = arr[i].id

          obj["image_url"] = arr[i].image_url
          obj["likedUsers"] = usernames
          obj["postMadeBy"] = arr[i].username
          return resolve(obj)
        }
      }
    )
  })
}
func3 = (arr, i) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select comment_text,username from comments where photo_id=? ",
      arr[i].id,
      (err, result) => {
        if (err) {
          return reject(err)
        } else {
          const comments = []

          result.map(async (item) => {
            comments.push(item)
          })

          return resolve(comments)
        }
      }
    )
  })
}
func4 = (arr, i, id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from likes where photo_id=? and user_id=?",
      [arr[i].id, id],
      (err, result) => {
        if (err) {
          return reject(err)
        } else {
          var x = new Boolean(false)
          if (result.length > 0) {
            x = true
          } else {
            x = false
          }
          return resolve(x)
        }
      }
    )
  })
}
app.get("/api/getposts/home/:id", async (req, res) => {
  const arr = []
  //array
  const f1 = []
  // comments
  const f2 = []
  // likes
  const f3 = []
  const finalResult = []
  const id = req.params.id
  try {
    const result1 = await func1()
    arr.push(...result1)

    for (let i = 0; i < arr.length; i++) {
      const result2 = await func2(arr, i)
      f1.push(result2)
    }

    for (let i = 0; i < arr.length; i++) {
      const result3 = await func3(arr, i)

      f2.push(result3)
    }
    for (let i = 0; i < arr.length; i++) {
      const result4 = await func4(arr, i, id)
      f3.push(result4)
    }

    for (let i = 0; i < arr.length; i++) {
      var obj = {}
      obj["id"] = f1[i].id
      obj["image_url"] = f1[i].image_url
      obj["likedUsers"] = f1[i].likedUsers
      obj["postMadeBy"] = f1[i].postMadeBy
      obj["comments"] = f2[i]
      obj["liked"] = f3[i]
      obj["created_at"] = arr[i].created_at
      finalResult.push(obj)
    }
    res.json(finalResult)
  } catch (err) {
    console.log(err)
  }
})

app.get("/api/preliked/:pid/:uid", (req, res) => {
  const pid = req.params.pid
  const uid = req.params.uid
  //("hit")
  db.query(
    "select * from likes where photo_id=? and user_id=?",
    [pid, uid],
    (err, result) => {
      if (result.length > 0) {
        res.json({
          photo_id: photo_id,
          user_id: user_id,
          liked: true,
        })
      } else {
        res.json({
          photo_id: photo_id,
          user_id: user_id,
          liked: false,
        })
      }
    }
  )
})
app.post("/api/comment", (req, res) => {
  const comment = req.body.comment
  const userid = req.body.id
  const photoid = req.body.photoid
  const username = req.body.username
  //(comment)
  db.query(
    "INSERT INTO comments(comment_text,photo_id,user_id,username) VALUES(?,?,?,?)",
    [comment, photoid, userid, username],
    (err, result) => {
      //(result)
      if (err) console.log(err)
      else res.send("values inserted")
    }
  )
})

app.post("/api/likes", (req, res) => {
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
app.post("/api/follow", (req, res) => {
  //(req.body)
  db.query(
    "INSERT INTO follows (follower_id,followee_id,follower_username,followee_username) values(?,?,?,?)",
    [
      req.body.follower,
      req.body.followee,
      req.body.follower_username,
      req.body.followee_username,
    ],
    (err, result) => {
      console.log(result)
      if (err) console.log(err)
    }
  )
})
app.get("/api/", (req, res) => {
  res.send("running")
})
app.listen(3001, () => {
  console.log("started")
})
