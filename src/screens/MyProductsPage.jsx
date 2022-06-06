import React from 'react'
import { View, FlatList } from 'react-native'
import ProductItem from '../components/ProductItem'

const MyProductsPage = () => {
    const products = [
        {
          id: 1,
          shop: "Apple",
          name: 'iPhone 12 Pro',
          image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-silver-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202851000',
          price: '1.208,00 €',
          rate: 5
        },
        {
          id: 2,
          shop: "Amazon",
          name: 'Huawei 30P',
          image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-silver-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202851000',
          price: '349,99 €',
          rate: 4.5
        },
        {
          id: 3,
          shop: "Meidamarkt",
          name: 'Samsung Galaxy A50',
          image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-silver-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202851000',
          price: '299,99 €',
          rate: 0
        },
    ];

    return (
        <View style={{marginTop: 40}}>
            <FlatList 
                contentContainerStyle={{paddingHorizontal: 30}}
                data={products}
                renderItem={({ item : product }) => (
                <ProductItem {...product} allContent={true} heightCard={250} />
                )}
            />
        </View>
    )
}

export default MyProductsPage