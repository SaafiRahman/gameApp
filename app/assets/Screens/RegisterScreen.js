import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RegisterScreen(props) {
    return (
        <View style ={styles.container}>
            <Text>Register Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: "center",
        flex: 1
    }
})

export default RegisterScreen;