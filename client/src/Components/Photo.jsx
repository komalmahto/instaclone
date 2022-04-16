import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Image } from "cloudinary-react"
import axios from "axios"
function Photo() {
  const { id, photoid } = useParams()
  const [imgUrl, setimgUrl] = useState("")
  useEffect(() => {
    const Fetch = async () => {
      const URL = `http://localhost:3001/getpost/${id}/${photoid}`
      try {
        const res = await axios.get(URL)
        const url = res.data
        setimgUrl(url.photos)
      } catch (error) {
        console.log(error)
      }
    }
    Fetch()
  }, [imgUrl])
  console.log(id, photoid)

  return (
    <div>
      <h1>komal</h1>
      {
        <div class="row text-center">
          <div class="col-4 py-1">
            <Image
              cloudName="digvkvltj"
              publicId={imgUrl}
              class="img-fluid img-thumbnail rounded"
              alt="Profil Picture"
            />
          </div>
        </div>
      }
    </div>
  )
}

export default Photo
