import React, { useEffect} from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet, Image } from 'react-native'
import ValorationItem from '../components/ValorationItem'
import { Rating } from 'react-native-ratings';
import { findById } from '../services/product.service';
import { useState } from 'react';

const AllValorationsPage = ({ route, navigation }) => {

    const [product, setProduct] = useState({})

    const idProduct = route.params

    const getProduct = async () => {
        await findById(route.params.id).then(res => {
            console.log("RES SERVICE FIND BY ID ", res.data)
            setProduct(res.data)
        }).catch (err => console.log('ERROR', err))
    }

    useEffect(() => {
        getProduct()
        console.log('Product ', product)
    }, [])

    return (
        <View style={{flex: 1, paddingTop: '2%', backgroundColor: 'white'}}>
            <View style={styles.header}>
                <View style={{width: '35%'}}>
                    <Image 
                        source={{uri: product.image}}
                        style={{width: 130, height: 130}} 
                    />
                </View>
                <View style={{width: '65%', display: 'flex', justifyContent: 'center', paddingLeft: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>{product.name} - {product.shop}</Text>
                </View>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 22, marginLeft: 30}}>Average Rating</Text>
            <View style={styles.ratingText}>
                <Text style={{fontWeight: 'bold', fontSize: 40}}>{product.rateTotal}</Text>
                <Rating
                    style={{display: 'flex', justifyContent: 'center'}}
                    imageSize={35}
                    startingValue={product.rateTotal}
                    readonly
                />
            </View>
            <FlatList 
                contentContainerStyle={styles.list}
                data={product.valorations}
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
        marginTop: 20
    }
});

export default AllValorationsPage