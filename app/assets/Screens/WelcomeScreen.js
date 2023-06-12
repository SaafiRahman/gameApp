import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WelcomeScreen({ navigation }) {
    return (
            <View style={styles.container}>
              <ImageBackground source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'}} style={styles.background} blurRadius={6}>

                <View style={styles.fulllogo}> 
                  <Image style={styles.logo} source={require("../../assets/mlady.jpg")} />
                  <Text>Insert Title</Text>
                </View>

                <TouchableHighlight underlayColor={'#067A6F'} style={styles.buttonstylelogin} onPress={() => navigation.navigate('loginscreen')}>
                  <Text style={styles.welcomeTextlogin}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'#A95747'} style={styles.buttonstyleregister} onPress={() => navigation.navigate('registerscreen')}>
                  <View>
                    <Text style={styles.welcomeTextregister}>Register</Text>
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

      welcomeTextlogin: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }, 

      welcomeTextregister: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },

      fulllogo: {
        alignItems: "center",
        position: 'absolute',
        top: 100
      },

      buttonstylelogin: {
        bottom: 50,
        width: "90%",
        height: 70,
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: "center"
      },

      buttonstyleregister: {
        bottom: 30,
        width: "30%",
        height: 50,
        elevation: 8,
        backgroundColor: "#D9735F",
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: "center"
      }
  });

export default WelcomeScreen;