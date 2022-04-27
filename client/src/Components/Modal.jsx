import React, { Component } from "react"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined"
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined"
export default class Modal extends Component {
  render() {
    let modelStyle = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.8)",
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
                      src="https://images.unsplash.com/photo-1633933368862-13cbab97ded9?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNjU0Mjg4OA&ixlib=rb-1.2.1&q=85"
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
                      <h4>{this.props.user}</h4>
                      <ClearOutlinedIcon
                        onClick={this.props.hide}
                        fontSize="large"
                      />
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
                        <div> comment text </div>
                        <div
                          style={{ color: "black", fontSize: "0.8em" }}
                          className="comment-info"
                        >
                          {" "}
                          comment info{" "}
                        </div>
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
                      likes comments date
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
}
