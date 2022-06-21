import React, { useState} from 'react'
import { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import ButtonItem from '../components/ButtonItem'
import Input from '../components/Input'
import { loadImageGallery } from '../config/helpers'
import { addProduct } from '../services/product.service'
import { useNavigation } from '@react-navigation/native'

// Le tengo que pasar a ButtonItem la función de newProduct
const NewProductPage = ({route, navigation: {goBack}}) => {
    const [product, setProduct] = useState(null);
    const [image, setImage] = useState('https://cdn2.vectorstock.com/i/1000x1000/65/11/line-picture-photo-gallery-icon-vector-17696511.jpg');

    const navigation = useNavigation();

    const newProduct = async () => {
        await addProduct(product).then(res => {
            navigation.navigate('HomeScreen')
            route.params.callback()
        }
        ).catch (err => console.log('ERROR', err))
    }

    const chooseImage = async() => {
        setImage((await loadImageGallery([1, 1])).image)
    }

    useEffect(() => {
        setProduct(prev => ({
            ...prev,
            ['image']: image,
            ['rateTotal']: 0
        }))
    }, [image])

    return (
        <View style={{flex: 1, paddingTop: '5%', backgroundColor: 'white'}}>
            <View style={{display: 'flex', alignItems: 'flex-end'}}>
                <Input product={val => setProduct(val)}/>
            </View>
            <View style={{marginVertical: '3%', marginLeft: '10%'}}>
                <Text style={styles.label}>Image</Text>
                <TouchableOpacity onPress={chooseImage}>
                    <Image
                        style={styles.imagen}
                        source={{uri: image || 'https://cdn2.vectorstock.com/i/1000x1000/65/11/line-picture-photo-gallery-icon-vector-17696511.jpg'}}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonCreate}>
                <ButtonItem name={'CREATE PRODUCT'} onClick={newProduct} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonCreate: {
        margin: '10%', 
        display: 'flex', 
        justifyContent: 'center', 
        color: 'black'
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
  })

export default NewProductPage