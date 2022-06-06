import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { Rating } from 'react-native-ratings';

const ValorationItem = (props) => {
    return (
        <Card style={{height: 200, marginBottom: 30, padding: 5}}>
            <View style={styles.header}>
                <Avatar.Image size={55} source={props.userAvatar}/>
                <Text style={styles.title}>{props.userName}</Text>
            </View>
            <Card.Content style={{display: 'flex'}}>
                <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <Rating
                        imageSize={25}
                        startingValue={props.rate}
                    />
                    <Text style={{paddingLeft: 20, fontSize: 15}}>{props.date}</Text>
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