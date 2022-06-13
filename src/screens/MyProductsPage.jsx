import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ProductItem from '../components/ProductItem'
import { FAB } from 'react-native-paper'
import { useEffect } from 'react'
import { getProducts } from '../services/product.service'
import { useState } from 'react'

const MyProductsPage = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
      getProducts().then(res => {
        console.log("RES SERVICES ", res.data)
        setProducts(res.data)
      }
      ).catch (err => console.log('ERROR ', err))
    },[products])

    return (
      <>
        <View style={{marginTop: 40}}>
            <FlatList 
                contentContainerStyle={{paddingHorizontal: 30}}
                data={products}
                inverted
                renderItem={({ item : product }) => (
                <ProductItem {...product} allContent={true} heightCard={250} />
                )}
            />
        </View>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => console.log('Pressed')}
          color={'#A1E6B8'}
        />
      </>
    )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: 70,
    
    backgroundColor: 'white',
    color: '#A1E6B8'
  },
})

export default MyProductsPage