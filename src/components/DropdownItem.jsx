import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Modal } from 'react-native';
import { Icon } from 'react-native-elements';

// This dropdown return a callback to know that the order of the list has been changed
const DropdownItem = (props) => {

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState ({ label: 'Rate High', value: 'rateHigh' });  

  const orderBy = (filter) => {
    const allProducts = props.products;
    console.log('VALOR DEL SELECCIONADO', filter)
    switch(filter){
      case 'rateHigh':
        props.callback(allProducts.sort((a, b) => (a.rateTotal > b.rateTotal) ? 1 : -1))
        break;
      case 'rateDown':
        props.callback(allProducts.sort((a, b) => (a.rateTotal < b.rateTotal) ? 1 : -1))
        break; 
      case 'priceHigh':
        props.callback(allProducts.sort((a, b) => (a.price > b.price) ? 1 : -1))
        break; 
      case 'priceDown':
        props.callback(allProducts.sort((a, b) => (a.price < b.price) ? 1 : -1))
        break;
    }

    setVisible(false)
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text> { item.label } </Text> 
      </TouchableOpacity>
    )
  } 

  const onItemPress = (element)=> {
    setSelected(element) 
    props.onSelect(element)
    setVisible(false)
    orderBy(element.value)
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setVisible(!visible)}
    >
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity 
          onPress={() => setVisible(false)}
        >
          <View style={{top: 65, backgroundColor: 'white', width: 150, display: 'flex', alignSelf: 'flex-end', alignItems: 'center', borderWidth: 2, borderColor: '#F8F8F8'}}>
            <FlatList
              data={props.data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      <Text style={styles.buttonText}>{(selected && selected.label) || props.label}</Text>
      <Icon type='font-awesome' name='sort-amount-asc'/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 50,
    width: 140,
    paddingHorizontal: 10,
    zIndex: 1,
    display: 'flex',
    alignSelf: 'flex-end',
    margin: 10,
    borderRadius: 10
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  }
});

export default DropdownItem;