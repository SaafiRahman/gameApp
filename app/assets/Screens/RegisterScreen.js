import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableHighlight, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegisterScreen(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const saveName = async() => {
        try {
            await AsyncStorage.setItem("savedName", username)
        } catch (error) {
            console.log("err")
        }
    }

    return (
        <View style ={styles.container}>
            <ImageBackground blurRadius={6} style={styles.background} source={require('../../assets/demo-image1.png')}>
                <View style={styles.formatinput}>
                    <Text style={styles.logintext}>Register Account: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Choose Username"
                        onChangeText={(val) => setUsername(val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Choose Password"
                        secureTextEntry
                        onChangeText={(val) => setPassword(val)}
                    />

                    <TouchableHighlight underlayColor={'#067A6F'} style={styles.buttonstylelogin}  onPress={() => saveName}>
                        <Text style={styles.welcomeTextlogin}>Submit</Text>
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
        alignSelf: 'flex-start',
        bottom: 10
      },

      input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderRadius: 8,
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

export default RegisterScreen;