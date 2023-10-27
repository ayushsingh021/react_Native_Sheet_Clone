import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const GridInputComponent = ({gridData,onCellChange}) => {
  
const initialGridData = Array(10).fill(Array(5).fill(''));

  return (
    <View>
          {gridData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
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
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 80,
    height: 50,
    borderWidth: 1.5,
  },
});

export default GridInputComponent;
