import React, {useEffect, useState} from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { loadImageGallery } from '../config/helpers';
// import ImagePicker from 'react-native-image-crop-picker';

const Input = (props) => {

  const [shop, setShop] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);

  const [image, setImage] = useState(undefined);

  const chooseImage = async() => {
    setImage((await loadImageGallery([1, 1])).image)
  }

  return (
    <View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Shop</Text>
            <TextInput
                style={styles.input}
                placeholder={'Product shop'}
            />
        </View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder={'Name product'}
            />
        </View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                placeholder={'Product price'}
                keyboardType={'numeric'}
            />
        </View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Image</Text>
            <TouchableOpacity onPress={chooseImage}>
                <Image
                    style={styles.imagen}
                    source={{uri: image || 'https://cdn2.vectorstock.com/i/1000x1000/65/11/line-picture-photo-gallery-icon-vector-17696511.jpg'}}
                />
            </TouchableOpacity>
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
    },
    imagen: {
        paddingTop: 20,
        height: 100,
        width: 100,
        padding: 20,
        marginTop: 10
    }
});

export default Input