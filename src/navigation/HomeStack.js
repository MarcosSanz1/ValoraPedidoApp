import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ValoratePage from '../screens/ValoratePage';
import AllValorationsPage from '../screens/AllValorationsPage';
import NewProductPage from '../screens/NewProductPage';
import MyProductsPage from '../screens/MyProductsPage';

const Stack = createStackNavigator();

export default function HomeStack(navigation) {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
        name='HomeScreen'
        component={MyProductsPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Valorate'
        component={ValoratePage}
        options={{title: 'Give Feedback'}}
      />
      <Stack.Screen
        name='AllValorations'
        component={AllValorationsPage}
        options={{title: 'View Product'}}
      />
      <Stack.Screen
        name='NewProductScreen'
        options={{title: 'CREATE NEW PRODUCT'}}
        component={NewProductPage}
      />
    </Stack.Navigator>
  );
}