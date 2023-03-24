import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./components/styles";
import { useEffect, useState } from "react";

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://api.quotable.io/search/authors?query=Einst").then((response) => response.json()).then(
  (result) => {
    setIsLoading(false);
    setResponse(result);
  },
  (error) => {
    setIsLoading(false);
    setError(error);
  }

)

      
  }, []);
  
  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
    if (error) {
      return <Text>{error}</Text>;
  }

  return <Text>QUOD: {}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text>Hello, user</Text>
        {getContent()}
        <StatusBar style="auto"></StatusBar>
      </View>

  );
}
