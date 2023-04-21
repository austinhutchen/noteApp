import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor:"darkslategrey",
    // alignItems: 'center',
    // justifyContent: 'center',
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
    color: "white",
    fontSize: 25,
  },
  quote: {
    alignSelf: "center",
    color: "yellowgreen",
    fontSize: 16,
    padding: 20,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
  },
  date: {
    color: "seashell",
    fontSize: 25,
  },
  Input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
  },
  refresh:{
    

  },

  history:{

  },
});
