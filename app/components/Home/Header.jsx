import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../../constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const user = useUser();
  return (
    <View style={styles.container}>
      {/* <Image source={{uri:user?.imageUrl}} style={{height:30, width:30, borderRadius:30}}/> */}
      <Image
        source={{ uri: user?.imageUrl}}
        style={{ height: 30, width: 30, borderRadius: 30 }}
      />
      <Text style={styles.brand}>Gâteau Finder</Text>

      <TouchableOpacity>
        <FontAwesome
          name="filter"
          size={30}
          color={Colors.primary}
          style={styles.filter}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  filter: {
    marginRight: 40,
    // width: 30,
    // height:30,
    // borderRadius:99
  },
  brand: {
    borderWidth: 1,
    marginRight: -50,
    borderColor: Colors.primary,
    padding: 5,
    textAlign: "center",
    fontFamily: "Outfit-Bold",
    fontSize: 20,
    backgroundColor: Colors.primary,
    color: Colors.white,
    borderRadius: 10,
  },
});
