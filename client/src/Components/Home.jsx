import React, { useState, useEffect, useContext } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined"
import axios from "axios"
import { Grid } from "@material-ui/core"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"

import { AuthContext } from "../Context/AuthContext"
function Home() {
  const { user } = useContext(AuthContext)
  const id = user?.userData[0].id
  const username = user?.userData[0].username
  console.log(user?.userData[0])

  const [posts, setPosts] = useState([])
  const [comment, setComment] = useState("")

  useEffect(() => {
    const Fetch = async () => {
      const res = await axios.get(`http://localhost:3001/getposts/home/${id}`)
      const data = res.data
      data.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at)
      })
      setPosts(res.data)
    }
    Fetch()
  }, [user, id])
  // useEffect(() => {
  //   const FetchlikeData = async (pid, uid) => {
  //     const res = await axios.get(
  //       `http://localhost:3001/preliked/${pid}/${uid}`
  //     )
  //     setPreliked((prev) => {
  //       return [...prev, res.data]
  //     })
  //   }
  //   posts.map((item) => {
  //     FetchlikeData(item.id, userData[0].id)
  //   })
  // }, [userData, posts])
  const click = async (photoid) => {
    //console.log(photoid, userData[0].id)

    await axios
      .post("http://localhost:3001/likes", {
        id: id,
        photoid: photoid,
      })
      .then((response) => {
        console.log(response.data.count)
      })
    console.log("click")
    //navigate("/home")
    window.location.reload(false)
  }
  const addComment = async (photoid) => {
    //console.log(userData[0].id, photoid)
    await axios
      .post("http://localhost:3001/comment", {
        id: id,
        photoid: photoid,
        comment: comment,
        username: username,
      })
      .then((response) => {
        setComment(null)
        console.log(response.data)
      })
    window.location.reload(false)
  }
  return (
    <Grid container spacing={2}>
      {posts.length > 0 &&
        posts.map((item, key) => {
          return (
            <Grid item xs={12} md={12} lg={12}>
              <div class="card" key={key}>
                <div class="profile">
                  <img
                    src={`https://ui-avatars.com/api/?name=${item.postMadeBy}`}
                    alt="pic"
                  />
                  <a href={`/profile/${item.postMadeBy}`}>{item.postMadeBy}</a>

                  <h5>Somewhere</h5>

                  <i
                    class="bi bi-three-dots-vertical fa-2x"
                    style={{ color: "gray" }}
                  ></i>
                </div>
                <div class="post">
                  <img
                    alt="pic"
                    src={item.image_url}
                    style={{ objectFit: "contain", width: "100%" }}
                  />
                </div>
                <div class="icons">
                  <div>
                    {item.liked === false ? (
                      <FavoriteBorderOutlinedIcon
                        style={{
                          margin: "10px 10px 2px 10px",
                          fontSize: "30px",
                        }}
                        onClick={() => {
                          click(item.id)
                        }}
                      />
                    ) : (
                      <FavoriteOutlinedIcon
                        style={{
                          margin: "10px 10px 2px 10px",
                          fontSize: "30px",
                          color: "rgb(237, 73, 86)",
                        }}
                      />
                    )}

                    <ChatBubbleOutlineOutlinedIcon
                      style={{ margin: "10px 10px 2px 10px", fontSize: "30px" }}
                    />
                    <ShareOutlinedIcon
                      style={{ margin: "10px 10px 2px 10px", fontSize: "30px" }}
                    />
                  </div>
                  <div>
                    <BookmarkBorderOutlinedIcon
                      style={{ margin: "10px 10px 2px 10px", fontSize: "30px" }}
                    />
                  </div>
                </div>
                <div class="about-post">
                  <b>
                    <p>
                      <img alt="pic" src="https://picsum.photos/id/26/20" />{" "}
                      Liked by
                      {item.likedUsers.map((x, y) => {
                        return (
                          <span style={{ fontSize: "10px", color: "#ff1493" }}>
                            {" "}
                            {x} {","}
                          </span>
                        )
                      })}
                    </p>
                  </b>
                  {item.comments.map((item, key) => {
                    return (
                      <h4 class="name_caption">
                        <a
                          style={{ color: "black", textDecoration: "none" }}
                          href={`/profile/${item.username}`}
                        >
                          {item.username}
                        </a>
                        {" - "}
                        <span id="caption">{item.comment_text}</span>
                      </h4>
                    )
                  })}{" "}
                  <h4>
                    <img alt="pic" src="https://picsum.photos/id/19/19" />
                    <input
                      type="text"
                      placeholder="add a comment &#128512;&#128516;&#128525;&#128151;"
                      onChange={(e) => {
                        setComment(e.target.value)
                      }}
                    />
                    <SendOutlinedIcon
                      onClick={() => {
                        addComment(item.id)
                      }}
                    />
                  </h4>
                  <h6>26 minutes ago</h6>
                </div>
              </div>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Home
