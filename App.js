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
   <View>
    <Text style ={{fontSize:31}}>Grid with Dyanmic Data</Text>
    <View style= {{flex : 1 , flexDirection :'row' , flexWrap : 'wrap' }}>
      {
        users.map((item) => <Text style= {styles.textItem}>{item.name}</Text>)
      }
    </View>
   </View>
  ); 
};

const styles = StyleSheet.create(
  {
    textItem: {
      margin :5 ,
      fontSize : 25,
      backgroundColor: 'blue',
      padding:5,
      color: "#fff",
      width :120,
      height:120,
      borderWidth : 2,
      textAlign :'center',
      textAlignVertical :'center',
      borderColor : 'red',
    }
  }
)
export default App;
