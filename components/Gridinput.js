import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const GridInputComponent = ({gridData,onCellChange}) => {
  
const initialGridData = Array(10).fill(Array(5).fill(''));

  return (
    <View style= {{justifyContent:'center'}}>
  
      <View >
          <View style={styles.row}>
            <Text  style={styles.cellStyle}></Text>
            <Text  style={styles.cellStyle}>A</Text>
            <Text style={styles.cellStyle} >B</Text>
            <Text style={styles.cellStyle}>C</Text>
            <Text style={styles.cellStyle}>D</Text>
            <Text style={styles.cellStyle}>E</Text>
          </View>
           


          
      {gridData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
           <View>
            <Text style={styles.cellStyle}>{rowIndex+1}</Text>
           </View>
          {row.map((cell, colIndex) => (
          
            <TextInput
              key={colIndex}
              style={styles.cell}
              value={cell}
              
              onChangeText={(value) => onCellChange(value, rowIndex, colIndex)}
            />
          ))}
        
        </View>
      ))}

      </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent:'center',
  },
 
  cell: {
    width: 60,
    height: 40,
    borderWidth: 1.5,
  },
  cellStyle:{
    backgroundColor: '#FFF0CE',
    width: 60,
    height: 40,
    borderWidth: 1.5,
    textAlign:'center',
    textAlignVertical:'center',
  }
});

export default GridInputComponent;
