import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./components/styles";
import { useEffect, useState } from "react";

export default function App() {

  const getJoke = async () => {
    try {
      const res = await fetch(
        "https://api.quotable.io/search/authors?query=Einst"
      );
      if (!res.ok) {
        console.log("status: ", res.status);
        // carful you don't get an infinite loop
        await getJoke();
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log("catch error", error);
      // carful you don't get an infinite loop
      await getJoke();
    }
      
  };
  

  


  return (
    <View style={styles.container}>
      <Text>Hello, user</Text>
        {getJoke()["bio"]}
        <StatusBar style="auto"></StatusBar>
      </View>

  );
}
