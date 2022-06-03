import React, {useState} from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View} from 'react-native';

const Input = (props) => {

  const [shop, setShop] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);

  return (
    <View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Shop</Text>
            <TextInput
                style={styles.input}
                placeholder={'Product shop'}
            />
        </View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder={'Name product'}
            />
        </View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                placeholder={'Product price'}
                keyboardType={'numeric'}
            />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        width: 370,
        paddingVertical: 10,
        borderBottomColor: '#B1B1B1',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 17
    }
});

export default Input