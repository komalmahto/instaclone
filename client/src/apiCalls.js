import axios from "axios"
import { USER_SERVER } from "./config"
export const loginCall = async (userCredentials, dispatch) => {
  console.log(dispatch)
  //dispatch({ type: "LOGIN_START" })
  try {
    const response = await axios.post(`${USER_SERVER}/login`, userCredentials)
    //alert(response.data)
    console.log(response)
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
  } catch (err) {
    alert(err)
    //dispatch({ type: "LOGIN_ERROR", payload: err })
  }
}
