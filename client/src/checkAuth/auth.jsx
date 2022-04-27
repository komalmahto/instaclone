import React, { useEffect } from "react"
import { auth } from "../Actions/user_actions"
import { useSelector, useDispatch } from "react-redux"

export default function foo(ComposedClass, reload, adminRoute = null) {
  let userToken
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    console.log(user)

    useEffect(() => {
      //   userToken = JSON.parse(localStorage.getItem("user")) || null;
      //   console.log(userToken);
      //   if (userToken != null && user) {
      //     props.history.push("/playQuiz");
      //   } else {
      //     props.history.push("/login");
      //   }
      // dispatch(auth(user)).then(async (response) => {
      //   console.log(response);
      //   if (
      //     ((await response.payload.statusCode) ||
      //       response.payload.userData.statusCode) === 201
      //   ) {
      //     console.log("aya yaha");
      //     if (reload) {
      //       props.history.push("/playQuiz");
      //     }
      //   } else {
      //     if (adminRoute && response.payload.statusCode === 401) {
      //       props.history.push("/login");
      //     } else {
      //       if (reload === false) {
      //         props.history.push("/login");
      //       }
      //     }
      //   }
      // });
    }, [dispatch, props.history, user.googleAuth])

    return <ComposedClass {...props} user={user} token={userToken} />
  }
  return AuthenticationCheck
}
