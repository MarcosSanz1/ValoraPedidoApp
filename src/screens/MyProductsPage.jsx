import React from 'react'
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native'
import ProductItem from '../components/ProductItem'
import { ActivityIndicator, FAB } from 'react-native-paper'
import { useEffect } from 'react'
import { getProducts } from '../services/product.service'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DropdownItem from '../components/DropdownItem'

const MyProductsPage = (props) => {

  const image = require('../../assets/backGround.png')

    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [selected, setSelected] = useState({ label: 'Rate High', value: 'rateHigh' });
    const [productModified, setProductModified] = useState(false)

    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
      setLoading(true)
      getProducts().then(res => {
        setLoading(false)
        setAllProducts(res.data.sort((a, b) => (a.rateTotal > b.rateTotal) ? 1 : -1))
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
            <DropdownItem label={'Order by'} data={data} selected={selected} onSelect={setSelected} products={products} callback={(allProductsOrdered) => setProducts(allProductsOrdered)}/>
          </View>
          <ImageBackground source={image} resizeMode="cover" style={{display: 'flex', flex: 1}}>
          {loading ? 
            <ActivityIndicator size={'large'}/>:
            <View>
              <FlatList 
                contentContainerStyle={{paddingHorizontal: 30,  paddingBottom: 20}}
                data={products}
                inverted
                renderItem={({ item : product }) => (
                <ProductItem {...product} allContent={true} heightCard={250} callback={() => setProductModified(!productModified)} onLoading={setLoading}/>
                )}
              />
            </View>
          }
        </ImageBackground>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => {
            navigation.navigate('NewProductScreen', {callback: () => setProductModified(!productModified)})
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