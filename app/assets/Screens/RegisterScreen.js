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
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: "center",
        flex: 1
    },

    background: {
        flex: 1,
        alignItems: "center"
      },
})

export default RegisterScreen;