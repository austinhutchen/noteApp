import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#42b883",
    // alignItems: 'center',
    // justifyContent: 'center',
  },


  author: {
    color: "white",
    fontSize: 25,
  },
  quote: {
    alignSelf: "center",
    color: "white",
    fontSize: '14em',
    fontStyle: "italic",
    padding: 20,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderWidth: 5,
    borderColor: "thistle",
    borderRadius: 50,
  },
  date: {
    color: "seashell",
    fontSize: 25,
  },
  Input: {
    color: "white",
    height: 110,
    margin: 12,
    paddingLeft: 20,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderWidth: 5,
    border: 2,
    borderColor: "khaki",
    borderRadius: 50,
  },
  refresh: {},
  history: {
    color: "green",
  },
  history: {},
  Text: {
    color: "white",
  },
});
