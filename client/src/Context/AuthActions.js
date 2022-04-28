export const LoginStart = (userdata) => ({
  type: "LOGIN_START",
})
export const LoginSuccess = (user) => () => {
  console.log(user)
  return {
    type: "LOGIN_SUCCESS",
    payload: user,
  }
}
// export const LoginSuccess = (user) => (()=>{
//   type: "LOGIN_SUCCESS",
//   payload: user,
// })

export const LoginError = (err) => ({
  type: "LOGIN_ERROR",
  payload: err,
})
