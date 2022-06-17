import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/TabNavigator';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
