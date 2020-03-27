import React, { useState } from 'react'
import './styles.css'
import { Link , useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'


export default function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('/ongs', data)
      alert(`Your access ID: ${response.data.id}`)
      history.push('/')
    } catch (err) {
      alert('Error creating your profile')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>
          <h1>Sign up</h1>
          <p>Enter the platform and help people to find your ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Go back to logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="ONG name" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input 
            placeholder="Email" 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="WhatsApp" 
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            />
          <div className="input-group">
            <input 
              placeholder="City" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input 
              placeholder="UF" 
              style={{ width: 80 }} 
              value={uf}
              onChange={e => setUf(e.target.value)}
              />
          </div>
          <button className="button" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}