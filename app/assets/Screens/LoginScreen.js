import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';


function LoginScreen(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <View style ={styles.container}>
            <ImageBackground blurRadius={6} style={styles.background} source={require('../../assets/demo-image1.png')}>
                <View>
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
        right: 100,
        bottom: 100
      },

      input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8
}
})

export default LoginScreen;