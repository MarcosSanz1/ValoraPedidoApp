import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import ButtonItem from './ButtonItem';
import { Rating } from 'react-native-ratings';
import { deleteProduct } from '../services/product.service';

const ProductItem = (props) => {

    // Estas funciones redirigirán y pasarán datos a otras páginas
    const goToValorate = () => {
        
    }

    const goToViewValorates = () => {

    }

    return (
        <Card style={{height: props.heightCard, marginBottom: 30}}>
            <View style={styles.header}>
                <Text style={styles.title}>{props.shop}</Text>
                <IconButton icon={"close"} size={28} onPress={() => deleteProduct(props._id)}/>
            </View>
            <Card.Content style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{ width: '40%'}}>
                    <Card.Cover style={{ height: 120}} source={{ uri: props.image }} />
                </View>
                <View style={{width: '60%', display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 19}}>{props.name}</Text>
                    <Text style={{fontSize: 16}}>{props.price} €</Text>
                    <Rating
                        startingValue={0}
                        imageSize={30}
                        readonly
                    />
                </View>
            </Card.Content>
            {/* Estos botones tendrán un redireccionamiento pasando datos */}
            {/* Lo que hacía en el NewProduct era pasarle una función */}
            <View style={styles.buttons}>
                <ButtonItem name={'RATE'} style={{width: '40%'}} />
                <ButtonItem name={'SEE RATINGS'} />
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