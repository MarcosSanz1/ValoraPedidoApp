import React, {useEffect, useState} from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { loadImageGallery } from '../config/helpers';
// import ImagePicker from 'react-native-image-crop-picker';

const Input = (props) => {

  return (
    <View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Shop</Text>
            <TextInput
                name={'shop'}
                style={styles.input}
                placeholder={'Product shop'}
                onChangeText={text => props.product(prev => ({
                    ...prev,
                    ['shop']: text
                }))}
                // onChange={handleChange}
                // onChangeText={text => setShop(text)}
            />
        </View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                name={'name'}
                style={styles.input}
                placeholder={'Name product'}
                onChangeText={text => props.product(prev => ({
                    ...prev,
                    ['name']: text
                }))}
                // onChange={handleChange}
                // onChangeText={text => setName(text)}
            />
        </View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Price</Text>
            <TextInput
                name={'price'}
                
                style={styles.input}
                placeholder={'Product price'}
                keyboardType={'numeric'}
                onChangeText={text => props.product(prev => ({
                    ...prev,
                    ['price']: parseInt(text)
                }))}
                // onChange={handleChange}
                // onChangeText={text => setPrice(text)}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        width: 370,
        paddingVertical: 10,
        borderBottomColor: '#B1B1B1',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 17
    }
});

export default Input