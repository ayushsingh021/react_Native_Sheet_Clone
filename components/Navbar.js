import React from 'react';
import {Text, View, StyleSheet ,useWindowDimensions} from 'react-native';
import { Button } from 'react-native-elements';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const Navbar = ({ handleDownload ,clearData}) => {
 
  return (
    <View style={styles.navbar} >
      <Text style={{fontSize:15, textAlign:'center', textAlignVertical:'center'}}>Assignment</Text>
       <Button
        title="Clear"
        onPress={clearData}
        iconRight={false} 
        buttonStyle={styles.buttonStyle} 
      />
      <Button
        title="Save"
        onPress={handleDownload}
        iconRight={false} 
        buttonStyle={styles.buttonStyle} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    justifyContent:'space-between',
    padding: 10,
    backgroundColor: '#D2E3C8',
    marginBottom :10,
    elevation: 5, // Works for Android (API level 21+) only
    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonStyle: {
    backgroundColor: '#3A4D39',
    width : 100,
    borderRadius: 10,
    
    // Change the button background color
  },
});

export default Navbar;
