import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import ButtonItem from '../components/ButtonItem'
import { Rating } from 'react-native-ratings'

const ValoratePage = () => {
    return (
        <View style={{marginTop: '15%', marginHorizontal: '7%'}}>
            <Text>Give FeedBack</Text>
            <View style={{display: 'flex', alignItems: 'flex-start', marginTop: 40}}>
                <Text style={{fontSize: 18}}>How did we do?</Text>
                <Rating
                    style={{marginTop: 10}}
                    imageSize={60}
                    startingValue={4}
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
                    />
                </View>
            </View>
            <View style={styles.footerButton}>
                <ButtonItem name={'PUBLISH FEEDBACK'} />
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