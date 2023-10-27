import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
// import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = ({ handleDownload }) => {
  return (
    <View style={styles.navbar}>
      <Button
        title="Save"
        onPress={handleDownload}
        icon={
          <Icon
            name="save"
            size={15}
            color="white"
          />
        }
        iconRight={false} // Set to true if you want the icon on the right
        buttonStyle={styles.buttonStyle} // Style for the button
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'lightgray',
  },
  buttonStyle: {
    backgroundColor: 'blue', // Change the button background color
  },
});

export default Navbar;
