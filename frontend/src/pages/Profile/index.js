import React, { useState, useEffect } from 'react'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

export default function Profile() {

  const [ incidents, setIncidents ] = useState([]);
  const history = useHistory()

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  useEffect(() => {
    api.get('/ongs/incidents', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data.incidents)
    })
  }, [ongId])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert('Error deleting incident')
    }
  }

  function handleLogout() {
    localStorage.removeItem('ongId')
    localStorage.removeItem('ongName')
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero"/>
        <span>Welcome, {ongName}</span>

        <Link className="button" to="/incidents/new">Register a new case</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Registered Incidents</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Incident:</strong>
            <p>{incident.title}</p>

            <strong>Description:</strong>
            <p>{incident.description}</p>

            <strong>Amount:</strong>
            <p>{Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(incident.value)}</p>

            <button type="button" onClick={ () => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}