import React, { useState, useEffect } from "react"
import "./Home.css"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined"
import axios from "axios"
import { Grid } from "@material-ui/core"
function Home() {
  const [posts, setPosts] = useState([])

  var userData = JSON.parse(localStorage.getItem("userData"))
  useEffect(() => {
    const Fetch = async () => {
      const res = await axios.get("http://localhost:3001/getposts")
      setPosts(res.data)
      console.log(res.data)
    }
    Fetch()
  }, [])
  const click = async (photoid) => {
    console.log(photoid, userData[0].id)
    await axios
      .post("http://localhost:3001/likes", {
        id: userData[0].id,
        photoid: photoid,
      })
      .then((response) => {
        console.log(response.data.count)
      })
    console.log("click")
  }
  return (
    <Grid container spacing={2}>
      {posts.map((item, key) => {
        return (
          <Grid item xs={12} md={12} lg={12}>
            <div class="card" key={key}>
              <div class="profile">
                <h4>{item.username}</h4>
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
                  <FavoriteBorderOutlinedIcon
                    style={{ margin: "10px 10px 2px 10px", fontSize: "30px" }}
                    onClick={() => {
                      click(item.id)
                    }}
                  />
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
                <h4 class="name_caption">
                  Tejash Vaishnav{" "}
                  <span id="caption">
                    The real test is not whether you avoid this failure, because
                    you won't.....
                  </span>
                </h4>
                <h5>View all 69 comments</h5>
                <h4>
                  <img alt="pic" src="https://picsum.photos/id/19/19" />
                  <input
                    type="text"
                    placeholder="add a comment &#128512;&#128516;&#128525;&#128151;"
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
