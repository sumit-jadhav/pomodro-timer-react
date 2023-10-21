// import { useState } from "react"
import Button from "react-bootstrap/Button"
import "./App.css"
import Timer from "./Timer"
import { signInWithGoogle, signOutUser } from "./firebase"

function App() {
  // const name = localStorage.getItem("name")
  // useEffect(() => {
  //   first
  //   return () => {
  //     second
  //   }
  // }, [name])

  // const[user,setUser] =useState(false)
  // console.log(localStorage.getItem("name"))
  return (
    <div>
      <div>
        <Button onClick={signInWithGoogle} variant="primary">
          Sign in with Google
        </Button>
        {/* <Button variant="primary" onClick={signOutUser}>
          Sign Out
        </Button> */}
        <h4>{localStorage.getItem("name")}</h4>
        <h4>{localStorage.getItem("email")}</h4>
        <Timer />
      </div>
    </div>
  )
}

export default App
