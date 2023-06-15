import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableHighlight, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


function RegisterScreen(props) {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const saveName = async() => {
        try {
            await AsyncStorage.setItem("savedName", username);
        } catch (error) {
        }
    }

    const loadName = async() => {
        try {
            let name = await AsyncStorage.getItem("savedName");

            if (name !== null) {
                setUsername(name);
            }
        } catch (error) {
            
        }
    } 

    const savePassword = async() => {
        try {
            await AsyncStorage.setItem("savedPassword", password);
        } catch (error) {
        }
    }

    const loadPassword = async() => {
        try {
            let pass = await AsyncStorage.getItem("savedPassword");
            if (pass !== null) {
                setPassword(pass);
            }
        } catch (error) {
        }
    }

    const logininfo = {
        username,
        password
    }

    useEffect(() => {
        loadName();
        loadPassword();
    }, [])

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

                    <Text>{username}</Text>
                    <Text>{password}</Text>

                    <TouchableHighlight underlayColor={'#067A6F'} style={styles.buttonstylelogin}  onPress={() => { 
                        saveName();
                        savePassword();
                        navigation.navigate('loginscreen', {logininfo})
                    }}>
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