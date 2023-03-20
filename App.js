import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './components/styles'
export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Api call for quote will go here</Text>
      <StatusBar style="auto" />
    </View>
  );
}


