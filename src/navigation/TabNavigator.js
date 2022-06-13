import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// Tengo que importar 2 stack.Screen - El de la lista de productos y el del formulario para crear un producto
// import { HomeStack, CreateProductStack } from './HomeStack'

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name="Create"
        component={CreateStack}
        options={() => ({
            headerShown: false
        })} 
        />
        <Tab.Screen 
        name="My Products" 
        component={ProductsStack}
        options={() => ({
            headerShown: false
        })} 
        />
    </Tab.Navigator>
  )
}