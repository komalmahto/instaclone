import React, { useState, useRef, useContext } from "react"
import "./Login.css"

import { USER_SERVER } from "../config"
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import { loginCall } from "../apiCalls"
import { useNavigate } from "react-router"
import { CircularProgress } from "@mui/material"
function Login() {
  const username = useRef(null)
  const password = useRef(null)
  const { user, isFetching, dispatch } = useContext(AuthContext)
  console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.preventDefault()
    const tempUsername = username.current.value
    const tempPassword = password.current.value
    console.log(username, password)
    loginCall(
      {
        username: tempUsername,
        password: tempPassword,
      },
      dispatch
    )

    // if (!isFetching) {
    //   // alert("huaaa")
    //   history.push("/home")
    // } else {
    //   alert("error")
    // }
    // console.log("ayaaa")
    // const name = username
    // const pass = password
    // console.log(name)
    // //http://localhost:3001/login/${name}/${pass}
    // axios.get(`${USER_SERVER}/login/${name}/${pass}`).then((response) => {
    //   if (response.data.loggedin === true) {
    //     localStorage.setItem("loggedin", true)
    //     localStorage.setItem("userData", JSON.stringify(response.data.userData))
    //     alert(response.data.message)
    //     history.push("/profile")
    //     console.log(response)
    //   } else {
    //     console.log(response.data.message)
    //   }
    // })
  }
  return (
    <>
      <div class="login-page">
        <div class="login-container">
          <h1>
            <img
              class="instagram-title"
              alt="instagram title logo"
              src="https://i.imgur.com/wvLiKam.png"
            />
          </h1>
          <form class="login-form" onSubmit={handleSubmit}>
            <div class="username-info">
              <label for="username">
                <input
                  ref={username}
                  required
                  type="text"
                  placeholder="Phone number, username, or email"
                />
              </label>
            </div>
            <div class="password-info">
              <label for="password">
                <input
                  id="password"
                  type="password"
                  ref={password}
                  placeholder="Password"
                  required
                />
              </label>
            </div>

            <button class="login-btn">
              {isFetching ? (
                <CircularProgress
                  className="loading"
                  color="secondary"
                  size="25px"
                />
              ) : (
                "Sign In"
              )}
            </button>

            <div class="or-divider">
              <span class="or-text">OR</span>
            </div>

            <div class="facebook-login">
              <a href="https://www.facebook.com/">
                <img
                  src="https://img.icons8.com/fluency/48/000000/facebook.png"
                  class="facebook-icon"
                />
              </a>
              <a href="https://www.facebook.com/" class="login-with-fb">
                Log in with Facebook
              </a>
            </div>

            <a class="forgot-text" href="#">
              Forgot password?
            </a>
          </form>
        </div>

        <div class="sign-up-container">
          <Link style={{ textDecoration: "none" }} to="/signup">
            <div class="new-user login-with-fb">
              Don't have an account? Sign up
            </div>
          </Link>
        </div>
      </div>
      <div class="cta-app">Get the app.</div>
      <div class="cta-container">
        <div class="app-store-logo">
          <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img
              src="https://i.imgur.com/lREV6Qa.png"
              alt="download on the app store logo"
              class="apple-app-store"
            />
          </a>
        </div>
        <div class="app-store-logo">
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXRR9_gALAAHKOzMSO3MkAOZ0JJtC%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img
              src="https://i.imgur.com/DFQNKXK.png"
              alt="get it on google play logo"
              class="google-play"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Login
