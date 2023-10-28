import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Menu, Divider, Provider } from 'react-native-paper';

const HeaderNav = ({handleDownload , clearData ,importData}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    
    <Provider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Googly Sheet" />
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon="dots-vertical" color="white" onPress={openMenu} />}
          >
            <Menu.Item onPress={() => { /* Handle import action */ }} title="Import Excel" />
            <Divider />
            <Menu.Item onPress={() => { /* Handle download action */ }} title="Download Excel" />
            <Divider />
            <Menu.Item onPress={() => { /* Handle reset action */ }} title="Reset Sheet" />
          </Menu>
        </Appbar.Header>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HeaderNav;