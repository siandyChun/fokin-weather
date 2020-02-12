import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1} />
      <View style={styles.container2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  container1: {
    flex: 1,
    backgroundColor: 'blue'
  },

  container2: {
    flex: 3,
    backgroundColor: 'yellow'
  },

});
