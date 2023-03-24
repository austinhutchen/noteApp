import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./components/styles";
import { useEffect, useState } from "react";
import getJoke from "./components/func";


export default function App() {
let str =getJoke();
  return (
    <View style={styles.container}>
     <Text>{str.toString()}</Text>
      <Text>Hello, user</Text>
     
      <StatusBar style="auto"></StatusBar>
    </View>
  );
 
}
