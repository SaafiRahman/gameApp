import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WelcomeScreen({ navigation }) {
    return (
            <View style={styles.container}>
              <ImageBackground source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'}} style={styles.background} blurRadius={8}>

                <View style={styles.fulllogo}> 
                  <Image style={styles.logo} source={require("../../assets/mlady.jpg")} />
                  <Text>Insert Title</Text>
                </View>

                <TouchableHighlight underlayColor={'#AA0505'} style={styles.loginpanel} onPress={() => navigation.navigate('loginscreen')}>
                  <View>
                    <Text style={styles.welcomeText}>Login</Text>
                  </View> 
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'#C15F12'} style={styles.registerpanel} onPress={() => navigation.navigate('registerscreen')}>
                  <View>
                    <Text style={styles.welcomeText}>Register</Text>
                  </View>
                </TouchableHighlight>
              </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: "center"
    },
  
    loginpanel: {
      width: "100%",
      height: 70,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: "center"
    },

    registerpanel: {
        width: "100%",
        height: 70,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: "center"
      },

      logo: {
        width: 100,
        height: 100,
        
      },

      welcomeText: {
        fontSize: 30
      },

      fulllogo: {
        alignItems: "center",
        position: 'absolute',
        top: 100
      }
  });

export default WelcomeScreen;