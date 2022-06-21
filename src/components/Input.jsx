import React  from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';

// ESTO DEBERÍA DE CAMBIARLO, PARA QUE SIMPLEMENTE CON UN TextInput Y PASANDOLE PROPS TENGA TODOS LOS INPUTS
// TAMBIEN INTENTAR CAMBIAR EL onChangeText POR onChange
const Input = (props) => {

  return (
    <View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Shop</Text>
            <TextInput
                name={'shop'}
                style={styles.input}
                placeholder={'Product shop'}
                onChangeText={text => props.product(prev => ({
                    ...prev,
                    ['shop']: text
                }))}
            />
        </View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                name={'name'}
                style={styles.input}
                placeholder={'Name product'}
                onChangeText={text => props.product(prev => ({
                    ...prev,
                    ['name']: text
                }))}
                // onChange={handleChange}
                // onChangeText={text => setName(text)}
            />
        </View>
        <View style={{marginVertical: '3%'}}>
            <Text style={styles.label}>Price</Text>
            <TextInput
                name={'price'}
                
                style={styles.input}
                placeholder={'Product price'}
                keyboardType={'numeric'}
                onChangeText={text => props.product(prev => ({
                    ...prev,
                    ['price']: Number(text)
                }))}
                // onChange={handleChange}
                // onChangeText={text => setPrice(text)}
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