import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useContext } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewStyle from "../../constants/MapViewStyle.json";
import { UserLocation } from "../../context/UserLocation";

export default function GoogleMapView() {
  const { location, setLocation } = useContext(UserLocation);
  return (
    location?.latitude&&(
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          // customMapStyle={MapViewStyle}
          showsUserLocation={true}
          style={styles.map}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChangeComplete={(region) => {
            setLocation({ ...location, ...region });
          }}
        >
          <Marker
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
          >
            {/* <Image source={require('../../../assets/images/gateau-unique.jpg')} style={{width:40, height:40, borderRadius:50}}/> */}
          </Marker>
        </MapView>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
