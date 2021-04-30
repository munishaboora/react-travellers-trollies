import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const RegisterForm = () => {
    // state for form input
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [passwordOne, setPasswordOne] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')

    const history = useHistory()
    

    const makeNewUser = async (user) => {
        let resBody = JSON.stringify(user);
        console.log(resBody)
        const res = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: resBody,
    }); 
    const data = await res.json()
    console.log(data)
    history.push('/')
    }


    const submitRegisterForm = (e) => {
        e.preventDefault()
        // can do validation on password == password 2
        // call func to do POST request to make new user
        makeNewUser({name,username,email,passwordOne})

    }

    // can do validation on password == password 2
    return (
        <div>
            <form onSubmit={submitRegisterForm}>
                <div class="input-group">
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="What's your name?"/>
                </div>
                <div class="input-group">
                    <label>Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)}  type="text" placeholder="PLease enter a username"/>
                </div>
                <div class="input-group">
                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="What's your email?"/>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input value={passwordOne} onChange={(e) => setPasswordOne(e.target.value)} type="text" placeholder="PLease enter a password"/>
                </div>
                <div class="input-group">
                    <label>Repeat password</label>
                    <input value={passwordTwo} onChange={(e) => setPasswordTwo(e.target.value)} type="text" placeholder="Please repeat your password"/>
                </div>
                <input type="submit" value="Register now!" />
            </form>
        </div>
    )
}

export default RegisterForm
