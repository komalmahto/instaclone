import React, { useState, useEffect } from "react"
import Header from "./Header"
import "./Home.scss"
const Home = () => {
  //   const [posts, setPosts] = useState([])

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await postService.allPosts()
  //     }
  //   }, [])

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
            <div class="col-4 py-1">
              <img
                src="https://loremflickr.com/250/250/dogs/?random=1"
                class="img-fluid img-thumbnail rounded"
                alt="Profil Picture"
              />
            </div>
            <div class="col-4 py-1">
              <img
                src="https://loremflickr.com/250/250/dogs?random=2"
                class="img-fluid img-thumbnail rounded"
                alt="Profil Picture"
              />
            </div>
            <div class="col-4 py-1">
              <img
                src="https://loremflickr.com/250/250/dogs?random=3"
                class="img-fluid img-thumbnail rounded"
                alt="Profil Picture"
              />
            </div>
            <div class="col-4 py-1">
              <img
                src="https://loremflickr.com/250/250/dogs?random=4"
                class="img-fluid img-thumbnail rounded"
                alt="Profil Picture"
              />
            </div>
            <div class="col-4 py-1">
              <img
                src="https://loremflickr.com/250/250/dogs?random=5"
                class="img-fluid img-thumbnail rounded"
                alt="Profil Picture"
              />
            </div>
            <div class="col-4 py-1">
              <img
                src="https://loremflickr.com/250/250/dogs?random=6"
                class="img-fluid img-thumbnail rounded"
                alt="Profil Picture"
              />
            </div>
            <div class="col-4 py-1">
              <img
                src="https://loremflickr.com/250/250/dogs?random=7"
                class="img-fluid img-thumbnail rounded"
                alt="Profil Picture"
              />
            </div>
            <div class="col-4 py-1">
              <img
                src="https://loremflickr.com/250/250/dogs?random=8"
                class="img-fluid img-thumbnail rounded"
                alt="Profil Picture"
              />
            </div>
            <div class="col-4 py-1">
              <img
                src="https://loremflickr.com/250/250/dogs?random=9"
                class="img-fluid img-thumbnail rounded"
                alt="Profil Picture"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
