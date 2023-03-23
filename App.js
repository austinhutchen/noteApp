import  {StatusBar} from "expo-status-bar";
import { Text, View} from "react-native";
import {styles} from "./components/styles";
import Fquote from "./components/func";






export default function App() {
  return (
    <View style={styles.container}>
      <Text>
      Hello, user
      </Text>
        <Fquote/>
      <StatusBar style="auto" />
      <View>
    </View>
    </View>
   

  );
}
