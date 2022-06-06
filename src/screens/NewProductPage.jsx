import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonItem from '../components/ButtonItem'
import Input from '../components/Input'

const NewProductPage = () => {
    return (
        <View style={{marginTop: '15%'}}>
            <Text>CREATE NEW PRODUCT</Text>
            <View style={{display: 'flex', alignItems: 'flex-end'}}>
                <Input />
            </View>
            <View style={styles.buttonCreate}>
                <ButtonItem name={'CREATE PRODUCT'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonCreate: {
        margin: '10%', 
        display: 'flex', 
        justifyContent: 'center', 
        color: 'black'
    }
  })

export default NewProductPage