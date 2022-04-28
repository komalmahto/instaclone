import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import "./Home.css"
import FollowerModal from "./FollowerModal"
import FollowingModal from "./FollowingModal"
import { USER_SERVER } from "../config"
import { AuthContext } from "../Context/AuthContext"
import Modal from "./Modal"
import { Image } from "cloudinary-react"
const Profile = () => {
  let { username } = useParams()
  const { user } = useContext(AuthContext)
  const id = user?.userData[0].id
  const userName = user?.userData[0].username
  console.log(username)
  const [post, setPosts] = useState([])
  const [curr, setCurr] = useState()
  const [foll, setFoll] = useState(false)
  const [folling, setFolling] = useState(false)
  const [modal, setModal] = useState(false)

  //var userData = JSON.parse(localStorage.getItem("userData"))[0]
  const click = (key) => {
    setCurr(key)
    setModal(true)
  }
  const showFollowings = () => {
    setFolling(true)
  }
  const showFollower = () => {
    console.log("ss")
    setFoll(true)
  }
  useEffect(() => {
    const Fetch = async () => {
      //const username = userData.username
      //console.log(username)
      const res = await axios.get(`http://localhost:3001/getposts/${username}`)
      setPosts(res.data)
      console.log(res.data)
    }
    Fetch()
  }, [])
  const addFollower = async () => {
    console.log("click")
    const response = await axios.post(`${USER_SERVER}/follow`, {
      follower: post.photos[0].user_id,
      followee: id,
      follower_username: userName,
      followee_username: username,
    })
    console.log(response)
  }

  return (
    <div class="">
      <div className="container">
        <section>
          <div
            style={{ display: "flex" }}
            class="text-center align-items-center p-2 px-4"
          >
            <div class="">
              <img
                src="https://loremflickr.com/200/200/dogs?random=0"
                class="img-fluid rounded-circle"
              />
            </div>

            <div class="justify-content-center p-3">
              <div class="col-10">
                <strong>{username}</strong>
                <button onClick={addFollower}>Follow</button>
                <br />
                Colorado
                <br />
                Who Let The Dogs out ??!
              </div>
              <div class="row">
                <div class="col-3 border fw-bold">
                  {post?.photos?.length}
                  <br />
                  Posts
                </div>
                <div
                  onClick={() => showFollower()}
                  class="col-3 border fw-bold"
                >
                  {post?.followers?.length}
                  <br />
                  Followers
                </div>
                {foll === true ? (
                  <FollowerModal
                    follower={post?.followers}
                    hide={() => setFoll(false)}
                  />
                ) : (
                  ""
                )}
                <div
                  onClick={() => showFollowings()}
                  class="col-3 border fw-bold"
                >
                  {post?.followings?.length}
                  <br />
                  Followings
                </div>
                {folling === true ? (
                  <FollowingModal
                    followings={post?.followings}
                    hide={() => setFolling(false)}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div class="row text-center">
            {post.photos?.map((item, key) => {
              console.log(post.comments[key])
              return (
                <>
                  {/* <button onClick={setModal(true)}> */}
                  <div class="col-4 py-1">
                    <Image
                      cloudName="digvkvltj"
                      publicId={item.image_url}
                      class="img-fluid img-thumbnail rounded"
                      alt="Profil Picture"
                      onClick={() => click(key)}
                    />
                  </div>

                  {modal === true ? (
                    <Modal
                      photo={post.photos[curr].image_url}
                      user={item.username}
                      hide={() => setModal(false)}
                      comment={post.comments[curr]}
                    />
                  ) : (
                    ""
                  )}
                </>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile
