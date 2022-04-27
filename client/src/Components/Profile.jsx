import axios from "axios"
import React, { useState, useEffect } from "react"
import Header from "./Header"
import { Link, NavLink } from "react-router-dom"
import "./Home.css"
import Modal from "./Modal"
import { Image } from "cloudinary-react"
const Profile = () => {
  const [post, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  var userData = JSON.parse(localStorage.getItem("userData"))[0]
  const click = () => {
    setModal(true)
  }
  useEffect(() => {
    const Fetch = async () => {
      const id = userData.id
      const res = await axios.get(`http://localhost:3001/getposts/${id}`)
      setPosts(res.data.photos)
      //console.log(res.data.photos)
    }
    Fetch()
  }, [post])

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
              <strong>{userData?.username}</strong>
              <br />
              Colorado
              <br />
              Who Let The Dogs out ??!
            </div>
          </div>

          <div class="row text-center">
            {post.map((item, key) => {
              return (
                <>
                  {/* <button onClick={setModal(true)}> */}
                  <div class="col-4 py-1">
                    <Image
                      cloudName="digvkvltj"
                      publicId={item.image_url}
                      class="img-fluid img-thumbnail rounded"
                      alt="Profil Picture"
                      onClick={() => click()}
                    />
                  </div>
                  {/* </button> */}
                  {modal === true ? (
                    <Modal
                      photo={item.image_url}
                      user={userData.username}
                      hide={() => setModal(false)}
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
