import React, { useState, useContext } from "react"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import Dropzone from "react-dropzone"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { Image } from "cloudinary-react"
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import axios from "axios"
import { useNavigate } from "react-router"
import { AuthContext } from "../Context/AuthContext"
import { USER_SERVER } from "../config"
function Header() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const id = user?.userData[0].id
  const username = user?.userData[0].username
  console.log(user?.userData[0])

  const [photo, setPhoto] = useState("")
  const [searchUser, setsearchUser] = useState("")
  const onDrop = async (files) => {
    setPhoto(files[0])
    console.log(files)
    let formData = new FormData()
    const config = {
      header: { "content-type": "multipart/form-data" },
    }

    formData.append("file", files[0])

    formData.append("upload_preset", "tgkyyzcb")
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/digvkvltj/upload",
      formData
    )
    console.log(response)

    axios
      .post(`${USER_SERVER}/post`, {
        img_url: response.data.secure_url,
        user_id: id,
        username: username,
      })
      .then((response) => {
        console.log(response)
      })
  }
  const search = () => {
    console.log(searchUser)
    navigate(`profile/${searchUser}`)
  }
  const handleLogOut = () => {
    localStorage.removeItem("user")
    navigate("/login")
    window.location.reload(false)
  }
  return (
    <div>
      {" "}
      <div style={{ borderBottom: "1px solid #dbdbdb", padding: "0 250px" }}>
        <nav class="navbar navbar-expand-sm navbar-light ">
          <div class="container-fluid">
            <a href="/home">
              <img
                src="	https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png
"
                height="40"
              />
            </a>

            <form class="d-none d-lg-flex mx-auto mb-2 mb-lg-0">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                ariaLabel="Search"
                onChange={(e) => {
                  setsearchUser(e.target.value)
                }}
              />
              <SearchOutlinedIcon onClick={search} />
            </form>

            <ul class="navbar-nav list-group-horizontal">
              <li class="nav-item px-1">
                <a class="nav-link" href="/home">
                  <HomeOutlinedIcon
                    style={{ color: "black", fontSize: "30px" }}
                  />
                </a>
              </li>

              <li class="nav-item px-1">
                <Dropzone onDrop={onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />

                      <AddBoxOutlinedIcon
                        style={{ color: "black", fontSize: "30px" }}
                      />
                    </div>
                  )}
                </Dropzone>
                {/* <a class="nav-link" href="#"></a> */}
              </li>

              <li class="nav-item px-1">
                <a class="nav-link" href="/profile">
                  <FavoriteBorderOutlinedIcon
                    style={{ color: "black", fontSize: "30px" }}
                  />
                </a>
              </li>

              <li class="nav-item px-1">
                <a class="nav-link" href="#">
                  <ExploreOutlinedIcon
                    style={{ color: "black", fontSize: "30px" }}
                  />
                </a>
              </li>
              <li class="nav-item px-1">
                <a class="nav-link" href={`/profile/${username}`}>
                  <PersonOutlineOutlinedIcon
                    style={{ color: "black", fontSize: "30px" }}
                  />
                </a>
              </li>
              <li class="nav-item px-1">
                <a class="nav-link" href="/logout">
                  <LogoutOutlinedIcon
                    onClick={handleLogOut}
                    style={{ color: "black", fontSize: "30px" }}
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
