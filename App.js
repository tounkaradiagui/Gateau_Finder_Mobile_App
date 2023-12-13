import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import Login from './app/Screens/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ClerkProvider, SignedIn, SignedOut  } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/Navigations/TabNavigation';
import * as Location from 'expo-location';
import { UserLocation } from './app/context/UserLocation';

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log(location.coords);
    })();
  }, []);

  let text = 'En attente..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Black': require('./assets/fonts/Outfit-Black.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-ExtraBold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'Outfit-SemiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };
 

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={"pk_test_aW5mb3JtZWQtY29uZG9yLTU1LmNsZXJrLmFjY291bnRzLmRldiQ"}>
      <UserLocation.Provider value={{location, setLocation}}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light"/>
          <SignedIn>
              <NavigationContainer>
                <TabNavigation/>
              </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <Login/>
          </SignedOut>
        </SafeAreaView>
      </UserLocation.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#078ECB',
  },
});
