import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, Alert, ImageBackground } from 'react-native';


function WelcomeScreen(props) {
    return (
            <View style={styles.container}>
              <ImageBackground source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'}} style={styles.background}>
                  
                <Image style={styles.logo} source={require("../../assets/mlady.jpg")} />

                <TouchableHighlight style={styles.loginpanel}>
                  <View>
                    <Text style={styles.welcomeText}>Login</Text>
                  </View> 
                </TouchableHighlight>

                <TouchableHighlight  style={styles.registerpanel}>
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
        position: 'absolute',
        fadeDuration: 300,
        top: 100
      },

      welcomeText: {
        fontSize: 30
      }
  });

export default WelcomeScreen;