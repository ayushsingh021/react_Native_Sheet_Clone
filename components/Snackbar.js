import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const Snackbar = () => {
  return (
    <Animated.View style={[styles.snackbar, { opacity: fadeAnim }]}>
      <Text style={styles.messageText}>{message}</Text>
      <TouchableOpacity onPress={onDismiss}>
        <Text style={styles.dismissText}>DISMISS</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

