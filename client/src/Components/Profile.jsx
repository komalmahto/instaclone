import axios from "axios"
import React, { useState, useEffect } from "react"
import Header from "./Header"
import { Link, NavLink } from "react-router-dom"
import "./Home.scss"
import { Image } from "cloudinary-react"
const Profile = () => {
  const [post, setPosts] = useState([])
  var userData = JSON.parse(localStorage.getItem("userData"))[0]
  useEffect(() => {
    const id = userData.id
    axios.get(`http://localhost:3001/getposts/${id}`).then((response) => {
      setPosts(response.data.photos)
    })
  })

  return (
    <div class="">
      <Header />
      <div className="container">
        <section>
          <div class="row text-center align-items-center p-2 px-4">
            <div class="col-3">
              <img
                src="https://loremflickr.com/200/200/dogs?random=0"
                class="img-fluid rounded-circle"
                alt="Profil Picture"
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
                <Link to={`/${userData?.id}/${item.id}`}>
                  <div class="col-4 py-1">
                    <Image
                      cloudName="digvkvltj"
                      publicId={item.image_url}
                      class="img-fluid img-thumbnail rounded"
                      alt="Profil Picture"
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile
