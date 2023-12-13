import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import { StatusBar } from 'expo-status-bar'
import GoogleMapView from '../components/Home/GoogleMapView'
import Search from '../components/Home/Search'

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.searchInput}>
        <Search/>
      </View>
      <GoogleMapView/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    
  },
  header:{
    position:"absolute",
    zIndex:10,
    width:"100%",
    paddingHorizontal:20
  },
  searchInput:{
    marginVertical:70,
    width:"80%",
    marginHorizontal:35
  }
})