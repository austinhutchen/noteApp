import { ActivityIndicator, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function fquote() {
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
    <View>
      {fetch()}
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}
