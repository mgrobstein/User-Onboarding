import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';

export default function App(){
  const[userList, setUserList] = useState({user: '', email:'', password:'', agree:false})
  const[form, setForm] = useState({user: '', email:'', password:'', agree:false})
  const[errors, setErrors] = useState({user: '', email:'', password:'', agree:''})
  const[disabled, setDisabled] = useState(true)

  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({ ...errors, [name]:''}))
    .catch(err => setErrors({ ...errors, [name]:err.errors[0]}))
  }

  const change = event => {
    const { value, name, type, checked} = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    setFormErrors(name, valueToUse)
    setForm ({ ...form, [name]: valueToUse})
  }

  const submit = event => {
    event.preventDefault()
    const newUser = {name: form.name.trim(), email: form.email.trim(), password: form.password.trim(), agree: form.agree}
    axios.post('https://reqres.in/api/users', newUser)
    .then(res =>{
      setUserList([newUser, ...userList]);
      setForm({ name:'', email:'', password:'', agree:false})
    }).catch(err =>{

    })
  }

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
  }, [form])

  return (
    <div className="App">
      <div style = {{ color: 'red'}}>
        <div>{errors.name}</div><div>{errors.email}</div>
      </div>
      <form onSubmit={submit}>
      <label htomFor="nameInput"> Name 
        <input
        onChange={change}
        maxLength="20"
        placeholder='Type your name here'
        id = "nameInput"
        name = "name"
        type = "text"
        value={form.name}
        /><br></br>
      </label>
      <label htomFor="emailInput"> Email 
        <input
        onChange={change}
        maxLength="30"
        placeholder='Type your email here'
        id = "emailInput"
        name = "email"
        type = "text"
        value={form.email}
        /><br></br>
      </label>
      <label htomFor="passwordInput"> Password 
        <input
        onChange={change}
        maxLength="20"
        placeholder='Type your password here'
        id = "passwordInput"
        name = "password"
        type = "text"
        value={form.password}
        /><br></br>
      </label>
      <label> Do you accept the terms of service? 
        <input
        onChange={change}
        name = "agree"
        type = "checkbox"
        checked={form.agree}
        /><br></br>
      </label>
      <button disabled={disabled}>Submit</button>
      <br></br>
      </form>
    </div>
  );
}


