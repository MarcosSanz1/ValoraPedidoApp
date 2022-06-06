import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import ButtonItem from './ButtonItem';
import { Rating } from 'react-native-ratings';

const ProductItem = (props) => {
    return (
        <Card style={{height: props.heightCard, marginBottom: 30}}>
            <View style={styles.header}>
                <Text style={styles.title}>{props.shop}</Text>
                {!props.allContent ? 
                    <IconButton icon={"delete"}/>
                : null}
            </View>
            <Card.Content style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{ width: '40%'}}>
                    <Card.Cover style={{ height: 120}} source={{ uri: props.image }} />
                </View>
                <View style={{width: '60%', display: 'flex', justifyContent: 'center'}}>
                    <Text style={{fontSize: 19}}>{props.name}</Text>
                    <Text style={{fontSize: 16}}>{props.price}</Text>
                    {props.allContent ? 
                        <Rating
                            imageSize={30}
                            startingValue={0}
                        />
                    : null}
                    {!props.allContent ? 
                        <View style={{marginTop: 18}}>
                            <ButtonItem name={'SEND'} />
                        </View>
                    : null}
                </View>
            </Card.Content>
            {props.allContent ? 
                <View style={styles.buttons}>
                    <ButtonItem name={'RATE'} style={{width: '40%'}} />
                    <ButtonItem name={'SEE RATINGS'} />
                </View>
            : null}
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