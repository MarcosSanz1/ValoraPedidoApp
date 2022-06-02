import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import NewProductPage from './src/screens/NewProductPage';

export default function App() {
  return (
    <View>
      <NewProductPage />
      <StatusBar style="auto" />
    </View>
  );
}
