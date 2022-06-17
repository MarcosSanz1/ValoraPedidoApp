import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewProductPage from '../screens/NewProductPage';
import MyProductsPage from '../screens/MyProductsPage';
import CreateProductStack from './CreateProductStack';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen 
          name="NewProduct"
          component={CreateProductStack}
          options={{title: 'CREATE NEW PRODUCT',
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: 'New',
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: (color) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          )}}
        />
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={26} />
          )}} 
        />
    </Tab.Navigator>
    
  )
}