import React, { useState } from "react"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import Dropzone from "react-dropzone"
import { Image } from "cloudinary-react"
import axios from "axios"
import { USER_SERVER } from "../config"
function Header() {
  const [photo, setPhoto] = useState("")

  const onDrop = async (files) => {
    setPhoto(files[0])
    console.log(files)
    let formData = new FormData()
    const config = {
      header: { "content-type": "multipart/form-data" },
    }

    formData.append("file", photo)

    formData.append("upload_preset", "tgkyyzcb")
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/digvkvltj/upload",
      formData
    )

    const loggedin = localStorage.getItem("loggedin")
    var userData = JSON.parse(localStorage.getItem("userData"))
    console.log(userData[0])
    axios
      .post(`${USER_SERVER}/post`, {
        img_url: response.data.secure_url,
        user_id: userData[0].id,
        username: userData[0].username,
      })
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <div>
      {" "}
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
                <a class="nav-link" href="/home">
                  <HomeOutlinedIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </a>
              </li>

              <li class="nav-item px-1">
                <Dropzone onDrop={onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />

                      <AddBoxOutlinedIcon
                        fontSize="large"
                        style={{ color: "black" }}
                      />
                    </div>
                  )}
                </Dropzone>
                {/* <a class="nav-link" href="#"></a> */}
              </li>

              <li class="nav-item px-1">
                <a class="nav-link" href="/profile">
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
              <li class="nav-item px-1">
                <a class="nav-link" href="/profile">
                  <PersonOutlineOutlinedIcon
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
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
