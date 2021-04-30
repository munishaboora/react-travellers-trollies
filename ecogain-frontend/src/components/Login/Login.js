import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css' 
var base64 = require('base-64')
// import RegisterPage from './../pages/RegisterPage'

const Login = () => {
    const history = useHistory()

    // set states for form inputs
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // state for error
    // const [formError, setFormError] = setError("")

    const loginUser = async(username, password) => {
        
        const res = await fetch(`http://localhost:5000/login`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization": `Basic ${base64.encode(`${username}:${password}`)}` },
            }); 
        const data = await res.json();
        console.log(data) 
        // need to insert some logic to check the json web token is returned
        // somehow store it in local storage - need to research
        // maybe we also want the id returned from the backend so we can also store that so we can use it 
        // to display the correct user profile page
        if (data.token) {
            history.push('/userdashboardpage')
        }
   
    }

    // upon form submission, need to try to log in, then route to user dashboard page
    const loginFormSubmitted = (e) => {
        e.preventDefault()
        loginUser(username, password)
        // we might need to use the id of the user to push them to the user dashboard for their user
        // or maybe will just need id for pushing them to the user profile page
        
    }

    return (
        <div>
            <form onSubmit={loginFormSubmitted}> 
                <div class="input-group">
                    <label>Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="please enter your username"/>
                </div>  
                <div class="input-group">
                    <label>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="please enter your password"/>
                </div> 
                <input type="submit" value="Log in"/>
            </form>
            <button onClick={() => history.push('/registerpage')}>Register Now</button>
        </div>
    )
}

export default Login
