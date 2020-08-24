import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import axios from 'axios'

const intitialLoginForm = {
  email: '',
  password: '',
};

const intitialLoginFormErrors = {
  email: '',
  password: '',
};


export default function Login(props) {

  const [userLogin, setUserLogin] = useState(intitialLoginForm)
  const [formErrors, setFormErrors] = useState(intitialLoginFormErrors)

  //so we can redirect to register page
  let history = useHistory()

  //login event handler
  //the login goes on the onSubmit of the form
  //wont work as of now without endpoints
  const login = event => {
    event.preventDefault()
    //axiosWithAuth post request to get token from server
    axiosWithAuth().post(/*'endpoint goes here', login credentials to send*/)
      .then(res => {
        console.log(res)

        //send token to local storage
        // localStorage.setItem('token', res.data.payload)

        //redirect to register page
        //history.push(route to register '/register')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form>
      <div>
        <h2>Login</h2>
      </div>

      <div>
        <label>Email:&nbsp;
          <input
            type='email'
            name='email'
            // value={}
            placeholder='email'
          // onChange={}
          />
        </label>

        <label>Password:&nbsp;
          <input
            type='password'
            name='password'
            // value={}
            placeholder='password'
          // onChange={}
          />
        </label>

      </div>
    </form>
  )
}