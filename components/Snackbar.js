import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const Snackbar = ({ message, visible, onDismiss }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        onDismiss();
      }, 3000); // Auto-dismiss after 3 seconds
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, fadeAnim, onDismiss]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles.snackbar, { opacity: fadeAnim }]}>
      <Text style={styles.messageText}>{message}</Text>
      <TouchableOpacity onPress={onDismiss}>
        <Text style={styles.dismissText}>DISMISS</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    backgroundColor: '#333',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  messageText: {
    color: 'white',
  },
  dismissText: {
    color: 'lightblue',
  },
});

export default Snackbar;
