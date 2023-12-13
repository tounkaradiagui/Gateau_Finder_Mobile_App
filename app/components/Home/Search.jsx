import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function Search() {
  return (
    <GooglePlacesAutocomplete
      placeholder='Rechercher une Pâtisserie'
      minLength={2} /* minimum length of text to search */
      autoFocus={true} /* automatically focus the input */
      fetchDetails={true} /* enable details request (more data about the location) */
      query={{
        key: "AIzaSyBkgGqi5eM6blwB1XAIiuYm0rbSLSNJHBg",
        language: "fr" /* language of the results */

      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      
    />
  )
}