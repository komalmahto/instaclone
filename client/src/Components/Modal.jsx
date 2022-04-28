import React, { Component, useState } from "react"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined"
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import axios from "axios"
import Picker from "emoji-picker-react"
function Modal(props) {
  const [comment, setComment] = useState("")
  const [showPicker, setshowPicker] = useState(false)
  var userData = JSON.parse(localStorage.getItem("userData"))
  let modelStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  }
  const addComment = async (photoid) => {
    console.log(comment)
    await axios
      .post("http://localhost:3001/comment", {
        id: userData[0].id,
        photoid: photoid,
        comment: comment,
        username: userData[0].username,
      })
      .then((response) => {
        setComment(null)
        console.log(response.data)
      })
    // window.location.reload(false)
  }
  const onEmojiClick = (event, emojiObject) => {
    console.log(typeof emojiObject.emoji)
    setComment((prevInput) => {
      return prevInput + emojiObject.emoji
    })
    setshowPicker(false)
  }
  return (
    <div className="modal show fade" tabindex="-1" style={modelStyle}>
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div
              style={{
                top: "0px",
                bottom: "0px",
                left: "0px",
                right: "0px",
                display: "grid",
                padding: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    flex: "1 1 400px",
                    minHeight: "400px",
                    maxHeight: "90vh",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={props.photo}
                  />
                </div>

                <div
                  style={{
                    flex: "1 4 300px",
                    maxWidth: "400px",
                    minWidth: "280px",
                    minHeight: "400px",
                    maxHeight: "90vh",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  id="info-container"
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "white",
                      borderBottom: "1px solid #D9D9D9",
                      flex: " 0 0 60px",
                      borderRadius: "0px 5px 0px 0px",
                      padding: "10px 20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4>{props.user}</h4>
                    <ClearOutlinedIcon onClick={props.hide} fontSize="large" />
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      flex: "1 1 0",
                      overflow: "scroll",
                      padding: "10px",
                      lineHeight: "20px",
                    }}
                  >
                    <div style={{ marginBottom: "10px" }}>
                      {props.comment.map((item, key) => {
                        console.log(item)
                        return (
                          <>
                            <div style={{ display: "flex" }}>
                              <div style={{ fontSize: "16px" }}>
                                <b>
                                  {item.username} {" -  "}
                                </b>
                              </div>
                              <div style={{ fontSize: "14px" }}>
                                {item.comment_text}
                              </div>
                            </div>
                          </>
                        )
                      })}
                    </div>
                  </div>
                  <div
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "white",
                      borderTop: "1px solid #D9D9D9",
                      flex: "0 0 100px",
                      borderRadius: "0px 0px 5px 0px",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <FavoriteBorderOutlinedIcon
                          fontSize="large"
                          style={{ color: "black", marginRight: "10px" }}
                        />
                        <ShareOutlinedIcon
                          fontSize="large"
                          style={{ color: "black" }}
                        />
                      </div>
                      <div>
                        <BookmarkBorderOutlinedIcon
                          fontSize="large"
                          style={{ color: "black" }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "2%",
                      }}
                    >
                      {" "}
                      <img
                        className="emoji-icon"
                        src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                        onClick={() => setshowPicker((val) => !val)}
                      />
                      {showPicker && (
                        <Picker
                          pickerStyle={{ width: "100%" }}
                          onEmojiClick={onEmojiClick}
                        />
                      )}
                      <input
                        style={{ border: "none", fontSize: "10px" }}
                        type="text"
                        value={comment}
                        placeholder="add a comment &#128512;&#128516;&#128525;&#128151;"
                        onChange={(e) => {
                          setComment(e.target.value)
                        }}
                      />
                      <SendOutlinedIcon
                        //style={{ flex: "0.1" }}
                        onClick={() => {
                          addComment(props.comment[0].photo_id)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
//{
//   render() {

//     console.log(this.props)

//   }
// }
