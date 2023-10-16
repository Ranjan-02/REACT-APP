import React, { useContext, useState } from "react"
import UserContext from "../context/UseContext"

const Login = () => {
    const [userName, SetUserName] = useState("")
    const [password, Setpassword] = useState("")
    const { setUser } = useContext(UserContext)
    const hendleClick = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }
    return (
        <div>
            <h1>LogIn</h1>
            <input type="text" placeholder="Enter Name" value={userName} onChange={(e) => SetUserName(e.target.value)} />
            <input type="text" placeholder="Password" value={password} onChange={(e) => Setpassword(e.target.value)} />
            <button onClick={hendleClick}>Submit</button>
        </div>

    )
}
export default Login;