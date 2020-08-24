import React, { useState, useEffect } from 'react'
import axios from 'axios'

import RegisterForm from './RegisterForm'


const intitialRegisterForm = {
  street_address: '',
  city: '',
  zip: '',
  property_type: '',
  leasable_area: '',
  parking: '',
  upgrades: '',
  special_remarks: ''
};

const intitialRegisterFormErrors = {
  street_address: '',
  city: '',
  zip: '',
  property_type: '',
  leasable_area: '',
  parking: '',
  // upgrades: '',
  // special_remarks: ''
};


export default function Register(props) {

  const [userRegister, setUserRegister] = useState(intitialRegisterForm)
  const [formErrors, setFormErrors] = useState(intitialRegisterFormErrors)

  const getUser = () => {
    axios.get('')
      .then(res => {
        debugger
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postUser = () => {
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
      <RegisterForm />
    </div>
  )
}