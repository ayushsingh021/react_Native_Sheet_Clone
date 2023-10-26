/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {TextInput,Text, View, StyleSheet, Button, ScrollView} from 'react-native';


const App = () => {
   const [count , setCount] = useState(0);
   //useEffcet Lifecylce in Gen
  //  useEffect(()=>{
  //   console.warn('hello')
  //  });

  useEffect(()=>{
    console.warn('hello')
   }, []); //useFffect only loading at the time of component mounting 

  return (
   <View>
    <Text style ={{fontSize:24}}>Component LifeCycle useEffect {count}</Text>
    <Button
    title='Click'
    onPress={() => setCount(count +1)}
    />
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
