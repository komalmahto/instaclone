import axios from "axios"
import { USER_SERVER } from "./config"
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" })
  try {
    const res = await axios.post(`${USER_SERVER}/login`, userCredential)
    console.log(res.data.payload)
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.payload })
  } catch (error) {
    alert("Login credentials doesn't match")
    dispatch({ type: "LOGIN_FAILURE", payload: error })
    console.log(error)
  }
}
