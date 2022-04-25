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
      .post("http://localhost:3001/post", {
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
                <a class="nav-link" href="#">
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
      {/* <div style={{ width: "100%", height: "200px" }}>
        {" "}
        <Image cloudName="digvkvltj" publicId={img} />
      </div> */}
    </div>
  )
}

export default Header
