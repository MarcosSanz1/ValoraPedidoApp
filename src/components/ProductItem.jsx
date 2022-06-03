import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';

// Este va a recibir una bool para dependiendo donde quieras la card te sacará un formato u otro
const ProductItem = (props) => {

    return (
        <Card style={{height: 200, width: '100%', marginBottom: 30}}>
            <Text style={{textTransform: 'uppercase', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 15}}>{props.shop}</Text>
            <Card.Content style={{display: 'flex', flexDirection: 'row'}}>
                <Card.Cover style={{width: '40%', height: 130}} source={{ uri: props.image }} />
                {/* <Title style={{paddingHorizontal: '8%', display: 'flex', alignSelf: 'center'}}>{props.name}</Title> */}
                <Text style={{paddingHorizontal: '8%', display: 'flex', alignSelf: 'center', fontSize: 19, flexWrap: 'wrap'}}>{props.name}</Text>
            </Card.Content>
        </Card>
    )
}

export default ProductItem