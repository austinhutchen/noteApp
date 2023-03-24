import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./components/styles";
import { useEffect, useState } from "react";
import getJoke from './components/func'
export default function App() {
 

  return (
    <View style={styles.container}>
      <Text>Hello, user</Text>
      {getJoke()["bio"]}
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}
