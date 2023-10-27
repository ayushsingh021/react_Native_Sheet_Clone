import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Replace with your preferred icon library

const CustomButton = ({ title, iconName, onPress }) => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor="#D3D3D3"
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={iconName} size={24} color="white" />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default CustomButton;
