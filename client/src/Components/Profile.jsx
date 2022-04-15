import axios from "axios"
import React, { useState, useEffect } from "react"
import Header from "./Header"
import "./Home.scss"
import { Image } from "cloudinary-react"
const Profile = () => {
  const res = []
  const [post, setPosts] = useState([])
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userData"))[0].id
    // console.log(id)
    axios.get(`http://localhost:3001/getposts/${id}`).then((response) => {
      //console.log(response.data)

      setPosts(response.data.photos)
      //console.log(res)
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

          <div>
            <h1 class="text-center">John dogs</h1>
          </div>

          <div class="row justify-content-center p-3">
            <div class="col-10">
              <strong>John Dogs</strong>
              <br />
              Colorado
              <br />
              Who Let The Dogs out ??!
            </div>
          </div>

          <div class="row text-center">
            {post.map((item, key) => {
              return (
                <div class="col-4 py-1">
                  <Image
                    cloudName="digvkvltj"
                    publicId={item}
                    class="img-fluid img-thumbnail rounded"
                    alt="Profil Picture"
                  />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile
