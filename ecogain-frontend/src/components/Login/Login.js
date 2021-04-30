import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'
// import RegisterPage from './../pages/RegisterPage'

const Login = () => {
    const history = useHistory()

    // set states for form inputs

    // state for error
    // const [formError, setFormError] = setError("")
    // upon form submission, need to try to log in, then route to user dashboard page
    const loginFormSubmitted = () => {
        alert('login form submitted')
        // we might need to use the id of the user to push them to the user dashboard for their user
        // or maybe will just need id for pushing them to the user profile page
        history.push('/userdashboardpage')
    }

    return (
        <div>
            <form onSubmit={loginFormSubmitted}> 
                <div class="input-group">
                    <label>Username</label>
                    <input placeholder="please enter your username"/>
                </div>  
                <div class="input-group">
                    <label>Password</label>
                    <input placeholder="please enter your password"/>
                </div> 
                <input type="submit" value="Log in"/>
            </form>
            <button onClick={() => history.push('/registerpage')}>Register Now</button>
        </div>
    )
}

export default Login
