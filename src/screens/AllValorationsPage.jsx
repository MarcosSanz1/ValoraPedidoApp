import React from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet, Image } from 'react-native'
import ValorationItem from '../components/ValorationItem'
import { Rating } from 'react-native-ratings';

const AllValorationsPage = () => {
    const valorations = [
        {
          id: 1,
          userName: 'sanzmarcos18',
          userAvatar: 'https://avatars2.githubusercontent.com/u/4048971?v=4',
          rate: 4,
          date: '20/4/22',
          comment: 'Muy buen producto'
        },
        {
          id: 2,
          userName: 'sanzmarcos18',
          userAvatar: 'https://avatars2.githubusercontent.com/u/4046971?v=4',
          rate: 5,
          date: '20/4/22',
          comment: 'Muy buen producto, he encontrado el mejor producto de la historia'
        },
        {
          id: 3,
          userName: 'sanzmarcos18',
          userAvatar: 'https://avatars2.githubusercontent.com/u/4048971?v=4',
          rate: 3,
          date: '19/4/22',
          comment: 'Muy buen producto, he encontrado el mejor producto de la historia, es muy sencillo de utilizar y va perfecto.'
        },
        {
            id: 4,
            userName: 'sanzmarcos18',
            userAvatar: 'https://avatars2.githubusercontent.com/u/4048971?v=4',
            rate: 3,
            date: '19/4/22',
            comment: 'Muy buen producto, he encontrado el mejor producto de la historia, es muy sencillo de utilizar y va perfecto.'
        },
        {
            id: 5,
            userName: 'sanzmarcos18',
            userAvatar: 'https://avatars2.githubusercontent.com/u/4048971?v=4',
            rate: 3,
            date: '19/4/22',
            comment: 'Muy buen producto, he encontrado el mejor producto de la historia, es muy sencillo de utilizar y va perfecto.'
        }
    ];

    return (
        <View style={{marginTop: 40}}>
            <View style={styles.header}>
                <View style={{width: '35%'}}>
                    <Image 
                        source={{uri: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-silver-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202851000'}}
                        style={{width: 130, height: 130}} 
                    />
                </View>
                <View style={{width: '65%', display: 'flex', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>iPhone 12 Pro - MediaMarkt</Text>
                </View>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 22, marginLeft: 30}}>Average Rating</Text>
            <View style={styles.ratingText}>
                <Text style={{fontWeight: 'bold', fontSize: 40}}>4,0</Text>
                <Rating
                    style={{display: 'flex', justifyContent: 'center'}}
                    imageSize={35}
                    startingValue={4}
                />
            </View>
            <FlatList 
                contentContainerStyle={styles.list}
                data={valorations}
                renderItem={({ item : valoration }) => (
                <ValorationItem {...valoration} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex', 
        flexDirection: 'row', 
        marginLeft: 10, 
        marginBottom: 20
    },
    ratingText: {
        display: 'flex', 
        flexDirection:'row', 
        justifyContent: 'space-around', 
        borderBottomWidth: 1, 
        borderBottomColor: '#F0F0F0'
    },
    list: {
        paddingHorizontal: 30, 
        marginTop: 20, 
        paddingBottom: '60%'
    }
});

export default AllValorationsPage