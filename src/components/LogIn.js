import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoginForm from './LoginForm'

const intitialLoginForm = {
  name: '',
  email: '',
  password: '',
};

const intitialLoginFormErrors = {
  name: '',
  email: '',
  password: '',
};

export default function Login(props) {

  const [userLogin, setUserLogin] = useState(intitialLoginForm)
  const [formErrors, setFormErrors] = useState(intitialLoginFormErrors)

  const getUserLogin = () => {
    axios.get('')
      .then(res => {
        debugger
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postUserLogin = () => {
    axios.post('')
      .then(res => {
        debugger
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {

      })
  }


  return (
    <div>
      <LoginForm />
    </div>
  )
}