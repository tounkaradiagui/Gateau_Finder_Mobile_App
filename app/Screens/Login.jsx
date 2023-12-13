import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {

    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPressSignIn = async () => {
        // Start the OAuth flow with Google. When it completes or fails, 
        try {
            const { createdSessionId, signIn, signUp, setActive } =
              await startOAuthFlow();
       
            if (createdSessionId) {
              setActive({ session: createdSessionId });
            } else {
              // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }        
    }
    

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Gâteau Finder</Text>
        <Image source={require('../../assets/images/gateau-au-salade.jpg')} style={styles.image}/>
        <Text style={styles.description}>
            Bienvenue sur Gâteau Finder ! Trouver les meilleures pâtisseries près de chez vous en un instant. 
            Prêt pour une aventure gourmande ? Laissez-vous guider par Gâteau Finder
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPressSignIn}>
            <Text style={styles.signIn}>Se connecter avec Google</Text>
            <FontAwesome name="google-plus-square" size={24} color="red" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:60,
    },
    title: {
        fontFamily:"Outfit-Bold",
        color:"#fff",
        textAlign:"center",
        fontSize:28,
        lineHeight:35,
    },
    image:{
        width:'100%',
        height:'30%',
        objectFit:"cover",
        marginTop:20
    },
    description: {
        marginTop:60,
        textAlign: "center",
        color: "#fff",
        fontSize:19,
        fontFamily:"Outfit-Black"
    },
    button: {
        marginTop:80,
        backgroundColor:"#fff",
        borderRadius:100,
        width:"80%",
        flexDirection:"row",
        gap:10,
        justifyContent:"space-evenly",
        alignItems:"center",
        marginHorizontal:"10%",
    },
    signIn: {
        fontFamily:"Outfit-ExtraBold",
        fontSize:15,
        textAlign:"center",
        paddingVertical:14,
        marginRight:-40
    }
  });