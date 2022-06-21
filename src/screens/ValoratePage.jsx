import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import ButtonItem from '../components/ButtonItem'
import { Rating } from 'react-native-ratings'
import { addValoration } from '../services/valoration.service'

const ValoratePage = ({route, navigation: {goBack}}) => {

    const idProduct = route.params

    const [valoration, setValoration] = useState({
        rate: 3,
        comment: ''
    })

    const addNewValoration = async () => {
        console.log('ROUTE PARAMS', route.params)
        route.params.loading(true)
        await addValoration(route.params.id, valoration).then(res => {
            route.params.callback()
            goBack()
            route.params.loading(false)
        }).catch (err => console.log('ERROR', err))
    }

    useEffect(() => {
        console.log("ID DEL PRODUCTO ", idProduct)
        console.log("Objeto valoración ", valoration)
    },[valoration])

    return (
        <View style={{flex: 1, paddingTop: '2%', paddingHorizontal: '7%', backgroundColor: 'white'}}>
            <View style={{display: 'flex', alignItems: 'flex-start', marginTop: 40}}>
                <Text style={{fontSize: 18}}>How did we do?</Text>
                <Rating
                    style={{marginTop: 10}}
                    imageSize={60}
                    startingValue={3}
                    onFinishRating={rate => setValoration(prev => ({
                        ...prev,
                        ['rate']: rate
                    }))}
                />
            </View>
            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 18}}>Care to share more about it?</Text>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={text => setValoration(prev => ({
                            ...prev,
                            ['comment']: text
                        }))}
                    />
                </View>
            </View>
            <View style={styles.footerButton}>
                <ButtonItem name={'PUBLISH FEEDBACK'} onClick={addNewValoration}/>
                <Text style={{marginTop: 20, color: '#A2A2A2', textAlign: 'center'}}>Your review will be posted to Valorapp</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textAreaContainer: {
      borderColor: '#C2C2C2',
      borderWidth: 1,
      padding: 5,
      marginTop: 10
    },
    textArea: {
      height: 150,
      justifyContent: "flex-start",
      textAlignVertical: 'top',
      fontSize: 17
    },
    footerButton: {
        margin: '10%', 
        display: 'flex', 
        justifyContent: 'center', 
        color: 'black'
    }
})

export default ValoratePage