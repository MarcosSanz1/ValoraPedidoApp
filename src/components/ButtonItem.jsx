import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// El botón va a recibir una función 
const ButtonItem = (props) => {
    return (
        <TouchableOpacity
            style={[styles.buttonCreate, props.style]}
            onPress={props.onClick}
        >
            <Text style={styles.textCreate}>{props.name}</Text>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    buttonCreate: {
        backgroundColor: '#A1E6B8', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '4%',
        borderRadius: 4
    },
    textCreate: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default ButtonItem