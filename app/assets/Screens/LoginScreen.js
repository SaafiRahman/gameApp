import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableHighlight } from 'react-native';
import {AsyncStorage} from 'react-native';


function LoginScreen(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style ={styles.container}>
            <ImageBackground blurRadius={6} style={styles.background} source={require('../../assets/demo-image1.png')}>
                <View style={styles.formatinput}>
                    <Text style={styles.logintext}>Login: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={(val) => setUsername(val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={(val) => setPassword(val)}
                    />

                    <TouchableHighlight underlayColor={'#067A6F'} style={styles.buttonstylelogin}>
                        <Text style={styles.welcomeTextlogin}>Login</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
      }, 

      logintext: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
        right: 115,
        
      },

      input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8
    },

    buttonstylelogin: {
        width: 100,
        height: 40,
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 50,
        paddingVertical: 2,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: "center"
      }, 

      formatinput: {
        alignItems: "center",
        justifyContent: 'center',
      }
})

export default LoginScreen;