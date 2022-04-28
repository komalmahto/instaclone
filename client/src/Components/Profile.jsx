import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import "./Home.css"
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
  const [modal, setModal] = useState(false)
  //var userData = JSON.parse(localStorage.getItem("userData"))[0]
  const click = (key) => {
    setCurr(key)
    setModal(true)
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

  return (
    <div class="">
      <div className="container">
        <section>
          <div class="row text-center align-items-center p-2 px-4">
            <div class="col-3">
              <img
                src="https://loremflickr.com/200/200/dogs?random=0"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="col-3 border fw-bold">
              192
              <br />
              Posts
            </div>
            <div class="col-3 border fw-bold">
              1000
              <br />
              Followers
            </div>
            <div class="col-3 border fw-bold">
              700
              <br />
              Following
            </div>
          </div>

          <div class="row justify-content-center p-3">
            <div class="col-10">
              <strong>{userName}</strong>
              <br />
              Colorado
              <br />
              Who Let The Dogs out ??!
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
