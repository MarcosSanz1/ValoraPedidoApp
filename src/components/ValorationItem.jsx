import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import moment from 'moment';

// This component receives a valoration to content of the card
const ValorationItem = (props) => {

    return (
        <Card style={{height: 200, marginBottom: 30, padding: 5}}>
            <View style={styles.header}>
                <Avatar.Image size={55} />
                <Text style={styles.title}>{props.user.name}</Text>
            </View>
            <Card.Content style={{display: 'flex'}}>
                <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <Rating
                        imageSize={25}
                        startingValue={props.rate}
                        readonly
                    />
                    <Text style={{paddingLeft: 20, fontSize: 15}}>{moment(props.date).format('DD/MM/YYYY')}</Text>
                </View>
                <View style={{marginTop: 10, display: 'flex'}}>
                    <Text style={{fontSize: 16}}>{props.comment}</Text>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex', 
        flexDirection: 'row', 
        padding: 10
    },
    title: {
        fontSize: 18,  
        marginLeft: 20, 
        marginTop: 10
    }
});

export default ValorationItem