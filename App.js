import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import NewProductPage from './src/screens/NewProductPage';
import SendProductPage from './src/screens/SendProductPage';
import MyProductsPage from './src/screens/MyProductsPage';
import ValoratePage from './src/screens/ValoratePage';
import AllValorationsPage from './src/screens/AllValorationsPage';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NewProductPage />
      {/* <SendProductPage /> */}
      {/* <MyProductsPage /> */}
      {/* <ValoratePage /> */}
      {/* <AllValorationsPage /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
