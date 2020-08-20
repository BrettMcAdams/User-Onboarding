import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}

const initialDisabled = true

function App() {

  const [ teamMember, setteamMember ] = useState([])
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  const getMembers = () => {
    axios.get('https://reqres.in/api/users?page=1')
      .then(res => {
        setteamMember(res.data)
      })
      .catch(err => {

      })
  }

  const postNewMembers = newMember => {
    axios.post('https://reqres.in/api/users?page=1', newMember)
      .then(res => {
        setteamMember([...teamMember, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
