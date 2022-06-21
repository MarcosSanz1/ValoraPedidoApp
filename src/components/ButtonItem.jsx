import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// This button receives a function, styles and text of the button
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