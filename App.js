import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./components/styles";
import { useEffect, useState } from "react";

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();
  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);
  const fetch = () => {
    if (isLoading) {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
    if (error) {
      return <Text>{error}</Text>;
    } else {
      return <Text> fetch done</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello, user</Text>
      <View>
        {fetch()}
        <StatusBar style="auto"></StatusBar>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
