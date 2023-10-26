/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {TextInput,Text, View, StyleSheet, Button, FlatList} from 'react-native';


const App = () => {
  const users = [
    {
      id:1,
      name : "Ayush"
    },
    {
      id:1,
      name : "Govind"
    },
    {
      id:1,
      name : "Shivam"
    },
    {
      id:1,
      name : "Khusi"
    },
    {
      id:1,
      name : "Dev"
    },
  ]
  return (
  <View>
   <Text style ={{fontSize:31}}>List of Friends </Text>
   <FlatList
   data={users}
    renderItem={({item})=><Text style={styles.textItem}>{item.name}</Text>}
    keyExtractor={item => item.id}
   />
 
  </View>
  ); 
};

const styles = StyleSheet.create(
  {
    textItem: {
      margin :10 ,
      fontSize : 24,
      padding:10,
      color: 'blue',
      borderWidth : 2,
      borderColor : 'red',
    }
  }
)
export default App;
