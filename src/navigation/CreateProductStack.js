import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyProductsPage from '../screens/MyProductsPage';
import NewProductPage from '../screens/NewProductPage';

const Stack = createStackNavigator();

export default function CreateProductStack(navigation) {
  return (
    <Stack.Navigator initialRouteName='NewProductScreen'>
        <Stack.Screen
            name='Home'
            component={MyProductsPage}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name='NewProductScreen'
            component={NewProductPage}
            options={{headerShown: true, headerStyle: {
              backgroundColor: '#A1E6B8'
            }, title:'CREATE NEW PRODUCT'}}
        />
    </Stack.Navigator>
  );
}