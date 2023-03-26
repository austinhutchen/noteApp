import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./components/styles";
import { useEffect, useState } from "react";
import getJoke from "./components/func";


export default function App() {
let str =getJoke();
  return (
    <View style={styles.container}>
       <ActivityIndicator style={styles.ActivityIndicator}></ActivityIndicator>
     <Text style={styles.Text}>{str.toString()}</Text>
      <Text  style={styles.Text}>Hello, user</Text>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
 
}
