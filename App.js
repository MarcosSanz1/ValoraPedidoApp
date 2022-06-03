import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import NewProductPage from './src/screens/NewProductPage';
import SendProductPage from './src/screens/SendProductPage';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <NewProductPage /> */}
      <SendProductPage />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
