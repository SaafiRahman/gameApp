import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Alert, ImageBackground } from 'react-native';


function WelcomeScreen(props) {
    return (
            <View style={styles.container}>
              <ImageBackground source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'}} style={styles.background}>
                <Image style={styles.logo} source={require("../../assets/mlady.jpg")} />
                <View style={styles.loginpanel}/>
                <View style={styles.registerpanel}/>
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
      backgroundColor: 'red'
    },

    registerpanel: {
        width: "100%",
        height: 70,
        backgroundColor: 'orange'
      },

      logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 100
      }
  });

export default WelcomeScreen;