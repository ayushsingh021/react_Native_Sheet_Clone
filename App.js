/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {TextInput,Text, View, StyleSheet, Button} from 'react-native';


const App = () => {
  const [name , setName] = useState('');
  return (
  <View>
    <Text style={{fontSize:30}}>Handle Text Input</Text>
    <Text style={{fontSize:30}}>Enter Your Name : {name}</Text>
    <TextInput
    style = {styles.textInput}
    placeholder ='Enter Your Name'
    value= {name}
    onChangeText = {(text) => setName(text)}

     />
     <Button 
     title='Clear Input'
     onPress={() => setName('')}/>
 
  </View>
  ); 
};

const styles = StyleSheet.create(
  {
    textInput: {
      margin :10 ,
      fontSize : 18,
      color: 'blue',
      borderWidth : 2,
      borderColor : 'red',
    }
  }
)
export default App;
