import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { useRef, useState } from 'react';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text>Put or Not!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A9E9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});