import React from 'react'
import { View, Text } from 'react-native'
import ButtonItem from '../components/ButtonItem'
import Input from '../components/Input'

const NewProductPage = () => {
    return (
        <View style={{marginTop: '15%'}}>
            <Text>CREATE NEW PRODUCT</Text>
            <View style={{display: 'flex', alignItems: 'flex-end'}}>
                <Input />
            </View>
            <View style={{margin: '10%', display: 'flex', justifyContent: 'center', color: 'black' }}>
                <ButtonItem name={'CREATE PRODUCT'} />
            </View>
        </View>
    )
}

export default NewProductPage