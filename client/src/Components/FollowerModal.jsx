import React, { Component, useState } from "react"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined"
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import axios from "axios"

import Picker from "emoji-picker-react"
function FollowerModal(props) {
  let modelStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  }

  console.log(props.follower[0])
  return (
    <div className="modal show fade" tabindex="-1" style={modelStyle}>
      <div className="modal-dialog modal-xs modal-dialog-scrollable">
        <div className="modal-content">
          <div
            className="modal-body"
            style={{ justifyContent: "space-between" }}
          >
            <ClearOutlinedIcon onClick={props.hide} fontSize="large" />
            {props.follower.map((item, key) => {
              return <li key={key}>{item.follower_username}</li>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowerModal
