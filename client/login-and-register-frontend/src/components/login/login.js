import React, {useEffect, useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"




const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    // const [data,setData] = useState([])
    // useEffect(()=>{
    
    // },[data])

    const login = () => {
        console.log("ddd");
        axios.post("http://localhost:5000/loginUser", user)
        .then(res => {
            console.log(res.data)
            alert("login successfully")
            setLoginUser(res.data.data)
            localStorage.setItem("datakey",JSON.stringify(res.data.data));
            
            history.push("/")
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login