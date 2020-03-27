import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {

  const [id, setId ] = useState('')

  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', { id })
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.ong.name)

      history.push('/profile')
    } catch (err) {
      alert('Error on log in. Try again')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input 
          placeholder="Your ID" 
          value={id}
          onChange={ e => setId(e.target.value) }/>
          <button className="button" type="submit">Enter</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Don't have an account? Click here
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="heroes" />
    </div>
  )
}