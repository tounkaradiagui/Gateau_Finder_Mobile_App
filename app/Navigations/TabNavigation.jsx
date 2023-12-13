import { View, Text } from "react-native";
import React from "react";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Favoris from "../Screens/Favoris";
import Profile from "../Screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={24} color="#078ECB" />
            ) : (
              <Ionicons name="home-outline" size={24} color="#078ECB" />
            ),
        }}
        name="Home"
        component={Home}
      />
      
      <Tab.Screen
        options={{
          tabBarLabel: "Fovoris",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="heart" size={24} color="#078ECB" />
            ) : (
              <Ionicons name="heart-outline" size={24} color="#078ECB" />
            ),
        }}
        name="Favoris"
        component={Favoris}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="#078ECB" />
            ) : (
              <Ionicons name="person-outline" size={24} color="#078ECB" />
            ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
