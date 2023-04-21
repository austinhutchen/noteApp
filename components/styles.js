import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor:"darkslategrey",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  quotebox: {
    color: "white",
    fontSize: 16,
  },
  buttons: {
    alignContent: "center",
    alignItems: "center",
    fontSize: 16,
    textAlignVertical: "center",
    borderRadius: 2,
    width: 200,
    height: 35,
    marginVertical: 8,
  },
  random: {
    padding: 150,
  },
  title: {
    marginBottom: 150,
  },
  author: {
    color: "black",
    fontSize: 25,
  },
  quote: {
    alignSelf: "center",
    color: "white",
    fontSize: 15,
    padding: 20,
    borderLeftWidth: 4,
    borderRightWidth: 4,
  },
  date: {},
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
