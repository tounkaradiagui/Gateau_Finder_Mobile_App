import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';

export default function Search({searchedLocation}) {
  return (
    <View style={styles.container}>
      <Ionicons name="md-location" size={24} color="#078ECB" />
      <GooglePlacesAutocomplete
        placeholder='Rechercher une Pâtisserie'
        minLength={2} /* minimum length of text to search */
        autoFocus={true} /* automatically focus the input */
        fetchDetails={true} /* enable details request (more data about the location) */
        query={{
          key: "AIzaSyBkgGqi5eM6blwB1XAIiuYm0rbSLSNJHBg",
          language: "en" /* language of the results */
  
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          searchedLocation(details?.geometry?.location)
        }}
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:'center',
    display:"flex",
    backgroundColor:"#fff",
    borderRadius:8,
    marginVertical:10,
    paddingHorizontal:10,
  }
});