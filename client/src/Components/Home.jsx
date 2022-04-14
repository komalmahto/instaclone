import React, { useState, useEffect } from "react"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
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
      <div style={{ borderBottom: "1px solid #dbdbdb", padding: "0 250px" }}>
        <nav class="navbar navbar-expand-sm navbar-light ">
          <div class="container-fluid">
            <img
              src="	https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png
"
              height="40"
            />

            <form class="d-none d-lg-flex mx-auto mb-2 mb-lg-0">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                ariaLabel="Search"
              />
            </form>

            <ul class="navbar-nav list-group-horizontal">
              <li class="nav-item px-1">
                <a class="nav-link" href="#">
                  <HomeOutlinedIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </a>
              </li>

              <li class="nav-item px-1">
                <a class="nav-link" href="#">
                  <AddBoxOutlinedIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </a>
              </li>

              <li class="nav-item px-1">
                <a class="nav-link" href="#">
                  <FavoriteBorderOutlinedIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </a>
              </li>

              <li class="nav-item px-1">
                <a class="nav-link" href="#">
                  <ExploreOutlinedIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </a>
              </li>

              {/* <li class="nav-item px-1">
              <a class="nav-link" href="#">
                <CircleOutlinedIcon />
              </a>
            </li> */}

              <li class="nav-item dropdown px-1">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="profile_dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <PersonOutlineOutlinedIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </a>

                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profile_dropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-lg fa-user-edit"></i>&nbsp;Profil
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-lg fa-bookmark"></i>&nbsp;&nbsp; Saved
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-lg fa-cog"></i>&nbsp;&nbsp;Settings
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Disconnect
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
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
