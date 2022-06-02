import React, {useState} from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View } from 'react-native';

// const UselessTextInput = (props) => {
//   return (
//     <TextInput
//       {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//       editable
//       maxLength={40}
//     />
//   );
// }

const UselessTextInput = (props) => {
    return (
        <View style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column'
            // paddingVertical: 20,
            // margin: 40
             }}>
            <Text style={{fontWeight: 'bold', fontSize: 17, paddingRight: 20}}>Shop</Text>
            <TextInput
                style={styles.input}
                placeholder={'Product shop'}
            />
        </View>
        
    );
  }

const LabelText = ({label}) => {
    return (
        <Text style={{fontWeight: 'bold'}}>{label}</Text>
    )
}

const Input = () => {
//   const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  const [shop, setShop] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);

  return (
    <View
    //   style={{
    //     display: 'flex',
    //     alignItems: 'flex-end',
    //     flexDirection: 'column'
    //     // paddingVertical: 20,
    //     // margin: 40
    //      }}
      >
      {/* <UselessTextInput
        // numberOfLines={1}
        // onChangeText={text => onChangeText(text)}
        // value={value}
        // style={{padding: 10}}
      /> */}

        {/* <LabelText>Shop</LabelText> */}
        {/* <Text style={{fontWeight: 'bold', fontSize: 17}}>Shop</Text>
        <TextInput
            style={styles.input}
            placeholder={'Product shop'}
        />
        <Text style={{fontWeight: 'bold', fontSize: 17}}>Name</Text>
        <TextInput
            style={styles.input}
            placeholder={'Name product'}
        />
        <Text style={{fontWeight: 'bold', fontSize: 17}}>Price</Text>
        <TextInput
            style={styles.input}
            placeholder={'Product price'}
            keyboardType={'numeric'}
        /> */}

        {/* <UselessTextInput /> */}
        <Text style={{fontWeight: 'bold', fontSize: 17}}>Shop</Text>
        <View style={{
            display: 'flex',
            alignItems: 'flex-end'
        }}>
            <TextInput
                style={styles.input}
                placeholder={'Product shop'}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 8,
        width: 350,
        borderBottomColor: '#B1B1B1',
        borderBottomWidth: 1,
        fontSize: 16,
    },
});

export default Input