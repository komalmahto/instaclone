import React, { useState } from "react"
import "./Login.css"
import { USER_SERVER } from "../config"
import axios from "axios"
function Signup() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const register = () => {
    console.log(username + password)
    axios
      .post(`${USER_SERVER}/signup`, {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response)
      })
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
          <form class="login-form">
            <div class="username-info">
              <label for="username">
                <input
                  id="username"
                  type="text"
                  placeholder="Phone number, username, or email"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div class="password-info">
              <label for="password">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <button onClick={register} class="login-btn">
              Sign Up
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
          <div class="new-user">
            Already have an account?{" "}
            <a class="sign-up-text" href="#">
              Login
            </a>
          </div>
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

export default Signup
