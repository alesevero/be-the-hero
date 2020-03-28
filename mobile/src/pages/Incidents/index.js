import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import api from '../../services/api'

import styles from './styles'

import logoImg from '../../assets/logo.png'

export default function Incidents() {

  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents() {
    if (loading) return
    if (total > 0 && incidents.length === total) return
    setLoading(true)
    const response = await api.get(`/incidents?page=${page}`)
    setIncidents([...incidents, ...response.data ])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{total} incidents</Text>
        </Text>
        <Image source={logoImg} />
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>Select one incident and save the day!</Text>
      <FlatList 
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG: </Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            
            <Text style={styles.incidentProperty}>Description: </Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Amaunt: </Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('en-CA', {
                style: 'currency',
                currency: 'CAD'
              }).format(incident.value)}
            </Text>
            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => {navigateToDetail(incident)}}>
                <Text style={styles.detailsButtonText}>See more details</Text>
                <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}