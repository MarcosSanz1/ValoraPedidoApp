import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import ButtonItem from './ButtonItem';
import { Rating } from 'react-native-ratings';
import { deleteProduct } from '../services/product.service';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

// This component receives a product to content of the card & return callback when user delete task
const ProductItem = (props) => {

    const navigation = useNavigation()

    const goToValorate = () => {
        navigation.navigate('Valorate', {id: props._id, loading: (load) => props.onLoading(load), callback: () => props.callback()})
    }

    const goToViewValorates = () => {
        navigation.navigate('AllValorations', {id: props._id})
    }

    const removeProduct = () => {
        props.onLoading(true)
        deleteProduct(props._id).then( res => {
            props.onLoading(false)
            console.log('Va bien')
        }
        ).catch( err => {
            props.onLoading(false)
            console.log('ERROR AAAA', err)
        } 
        )
    }

    const showDeleteProduct = () => {
        Alert.alert(
            "Are you sure?",
            "Product will be deleted",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", onPress: () => {removeProduct(), props.callback()}}
            ]
        );
    }

    const formatToCurrency = amount => {
        return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") + " €";
    };

    return (
        <Card style={{height: props.heightCard, marginBottom: 30}}>
            <View style={styles.header}>
                <Text style={styles.title}>{props.shop}</Text>
                <IconButton icon={"close"} size={28} onPress={showDeleteProduct}/>
            </View>
            <Card.Content style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{ width: '40%'}}>
                    <Card.Cover style={{ height: 120}} source={{ uri: props.image }} />
                </View>
                <View style={{width: '60%'}}>
                    <Text style={{fontSize: 19, marginLeft: 20}}>{props.name}</Text>
                    <Text style={{fontSize: 16, marginLeft: 20}}>{formatToCurrency(props.price)}</Text>
                    <Rating
                        startingValue={props.rateTotal}
                        imageSize={30}
                        readonly
                    />
                </View>
            </Card.Content>
            <View style={styles.buttons}>
                <ButtonItem name={'RATE'} style={{width: '40%'}} onClick={goToValorate}/>
                <ButtonItem name={'SEE RATINGS'} onClick={goToViewValorates}/>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginHorizontal: 15
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20, 
        fontWeight: 'bold', 
        marginLeft: 20, 
        marginTop: 15
    },
    buttons: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        gap: 20,
        paddingHorizontal: 20,
        marginTop: 15
    }
});

export default ProductItem