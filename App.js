/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {TextInput,Text, View, StyleSheet, Button, ScrollView} from 'react-native';


const App = () => {
  const users = [
    {
      id:1,
      name : "Ayush"
    },
    {
      id:2,
      name : "Govind"
    },
    {
      id:3,
      name : "Shivam"
    },
    {
      id:4,
      name : "Khusi"
    },
    {
      id:5,
      name : "Dev"
    },
    {
      id:6,
      name : "Dev"
    },
    {
      id:7,
      name : "Dev"
    },
    {
      id:8,
      name : "Dev"
    },
    {
      id:9,
      name : "Tank"
    },
    {
      id:10,
      name : "Tank"
    },
    {
      id:11,
      name : "Tank"
    },
    {
      id:12,
      name : "Birju",
    },

  ]
  return (
    <ScrollView style ={{marginBottom : 50}}>
 
   <Text style ={{fontSize:31}}>List of Friends </Text>
 
   {/* <FlatList
   data={users}
    renderItem={({item})=><Text style={styles.textItem}>{item.name}</Text>}
    keyExtractor={item => item.id}
   /> */}
   {
    users.map((item) => <Text style = {styles.textItem}> {item.name}</Text>)
   }
  
    </ScrollView>
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
