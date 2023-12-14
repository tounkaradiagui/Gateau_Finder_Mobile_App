import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Home/Header'
import { StatusBar } from 'expo-status-bar'
import GoogleMapView from '../components/Home/GoogleMapView'
import Search from '../components/Home/Search'
import { UserLocation } from './../context/UserLocation';
import GlobalApi from '../constants/GlobalApi'
import PlaceListView from '../components/Home/PlaceListView'

export default function Home() {

  const {location, setLocation} = useContext(UserLocation);

  useEffect(() => {
    location&&GetNearByPlace();
  }, [location])

  const [placeList, setPlaceList] = useState([]);
  // Get Near By Place API Calling Function
  const GetNearByPlace = () => {
    const data = {
      "includedTypes": ["fast_food_restaurant"],
      "maxResultCount": 15,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": location?.latitude,
            "longitude": location?.longitude
          },
          "radius": 5000.0
        }
      }
    }

    GlobalApi.NewNearByPlace(data).then(res => {
      console.log(JSON.stringify(res.data));
      setPlaceList(res.data?.places);
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.searchInput}>
        <Search searchedLocation={(location) => console.log(location)}/>
      </View>
      <GoogleMapView/>
      <View style={styles.place}>
        {placeList&&<PlaceListView myPlaceList = {placeList}/>}
      </View>

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
    position:"absolute",
    zIndex:10,
    alignSelf:'center',
    width:"80%",
    marginHorizontal:35
  },
  place:{
    position:"absolute",
    bottom:0,
    zIndex:10,
    width:"90%"
  }
})