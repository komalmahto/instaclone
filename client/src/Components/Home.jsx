import React, { useState, useEffect, useContext } from "react"
import "./Home.css"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined"
import axios from "axios"
import { Grid } from "@material-ui/core"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import { useNavigate } from "react-router"

import { AuthContext } from "../Context/AuthContext"
function Home() {
  //const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const id = user?.userData[0].id
  console.log(user?.userData[0])

  const [commented, setCommented] = useState([])
  const [preLiked, setPreliked] = useState(null)
  const [liked, setLiked] = useState(false)
  const [posts, setPosts] = useState([])
  const [comment, setComment] = useState("")
  var userData = JSON.parse(localStorage.getItem("userData"))
  useEffect(() => {
    const Fetch = async () => {
      const res = await axios.get(`http://localhost:3001/getposts/home/${id}`)
      setPosts(res.data)

      console.log(res.data)
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
    console.log(photoid, userData[0].id)
    setLiked(true)
    await axios
      .post("http://localhost:3001/likes", {
        id: userData[0].id,
        photoid: photoid,
      })
      .then((response) => {
        console.log(response.data.count)
      })
    console.log("click")
    //navigate("/home")
    //window.location.reload(false)
  }
  const addComment = async (photoid) => {
    console.log(comment)
    await axios
      .post("http://localhost:3001/comment", {
        id: userData[0].id,
        photoid: photoid,
        comment: comment,
        username: userData[0].username,
      })
      .then((response) => {
        setComment(null)
        console.log(response.data)
      })
    //window.location.reload(false)
  }
  return (
    <Grid container spacing={2}>
      {posts.length > 0 &&
        posts.map((item, key) => {
          return (
            <Grid item xs={12} md={12} lg={12}>
              <div class="card" key={key}>
                <div class="profile">
                  <h4>{item.postMadeBy}</h4>
                  <h5>Somewhere</h5>
                  <h6>Follow</h6>
                  <img src="https://picsum.photos/200/300" alt="pic" />

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
                  <p>
                    <img alt="pic" src="https://picsum.photos/id/26/20" /> Liked
                    by
                    {item.likedUsers.map((x, y) => {
                      return (
                        <span>
                          {" "}
                          {x} {","}
                        </span>
                      )
                    })}
                  </p>
                  {item.comments.map((item, key) => {
                    return (
                      <h4 class="name_caption">
                        <b>{item.username} </b>
                        <span id="caption">{item.comment_text}</span>
                      </h4>
                    )
                  })}{" "}
                  {/* <h5>View all 69 comments</h5> */}
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
