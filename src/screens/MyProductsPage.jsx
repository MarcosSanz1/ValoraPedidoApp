import React from 'react'
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import ProductItem from '../components/ProductItem'
import { FAB } from 'react-native-paper'
import { useEffect } from 'react'
import { getProducts } from '../services/product.service'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DropdownItem from '../components/DropdownItem'

const MyProductsPage = (props) => {

    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [selected, setSelected] = useState({ label: 'Rate High', value: 'rateHigh' });
    const [productModified, setProductModified] = useState(false)
    const [productOrder, setProductOrder] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
      getProducts().then(res => {
        
        setAllProducts(res.data)
        setProducts(res.data)
      }
      ).catch (err => console.log('ERROR ', err))
    },[productModified])

    const data = [
      { label: 'Rate Down', value: 'rateDown' },
      { label: 'Rate High', value: 'rateHigh' },
      { label: 'Price Down', value: 'priceDown' },
      { label: 'Price High', value: 'priceHigh' }
    ]
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#ECECEC'}}>
        <DropdownItem label={'Order by'} data={data} onSelect={setSelected} products={products} callback={(allProductsOrdered) => setProducts(allProductsOrdered)}/>
      </View>
      <View >
          <FlatList 
              contentContainerStyle={{paddingHorizontal: 30, paddingTop: 100, paddingBottom: 20}}
              data={products}
              inverted
              renderItem={({ item : product }) => (
              <ProductItem {...product} allContent={true} heightCard={250} callback={() => setProductModified(!productModified)}/>
              )}
          />
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          console.log('Pressed')
          navigation.navigate('NewProduct')
        }}
        color={'#A1E6B8'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 20,
    
    backgroundColor: 'white',
    color: '#A1E6B8'
  },
})

export default MyProductsPage