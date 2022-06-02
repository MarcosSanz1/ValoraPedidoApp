import React from 'react'
import { View, Text } from 'react-native'
import ButtonItem from '../components/ButtonItem'
import Input from '../components/Input'

const NewProductPage = () => {
    return (
        <View style={{marginTop: 50}}>
            <Text>CREATE NEW PRODUCT</Text>
            <Input />
            <ButtonItem />
        </View>
    )
}

export default NewProductPage