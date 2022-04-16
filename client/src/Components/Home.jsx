import React from "react"

function Home() {
  return (
    <div>
      <div class="card">
        <div class="profile">
          <h4>Tejash Vaishnav</h4>
          <h5>Somewhere</h5>
          <h6>Follow</h6>
          <img src="https://picsum.photos/200/300" />
          <span>.</span>
          <i class="bi bi-three-dots-vertical fa-2x" style="color:gray;"></i>
        </div>
        <div class="post">
          <img src="https://picsum.photos/400/400" />
        </div>
        <div class="icons">
          <i id="like" class="bi bi-heart fa-2x "></i>
          <i class="bi bi-chat-left fa-2x"></i>
          <i class="bi bi-arrow-up-right-square fa-2x"></i>
          <i id="save" class="bi bi-bookmark  fa-2x"></i>
        </div>
        <div class="about-post">
          <h4>
            <img src="https://picsum.photos/id/26/20" /> Liked by Gandijuha and
            104,424 others
          </h4>
          <h4 class="name_caption">
            Tejash Vaishnav{" "}
            <span id="caption">
              The real test is not whether you avoid this failure, because you
              won't.....
            </span>
          </h4>
          <h5 style="margin-top:-20px;">View all 69 comments</h5>
          <h4>
            <img src="https://picsum.photos/id/19/19" />
            <input
              type="text"
              placeholder="add a comment                                           &#128512;&#128516;&#128525;&#128151;"
              style="margin-top:-10px;"
            />
          </h4>
          <h6>26 minutes ago</h6>
        </div>
      </div>
    </div>
  )
}

export default Home
