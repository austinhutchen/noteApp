import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "darkslategrey",
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
    marginBottom: 20,
  },
  author: {
    color: "white",
    fontSize: 25,
  },
  quote: {
    alignSelf: "center",
    color: "yellowgreen",
    fontSize: 16,
    fontStyle:"italic" ,
    padding: 20,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderWidth: 5 ,
    borderColor: "thistle",
    borderRadius: 50,
  },
  date: {
    color: "seashell",
    fontSize: 25,
  },
  Input: {
    height: 110,
    margin: 12,
    paddingLeft: 20,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderWidth: 5 , 
    border: 2,
    borderColor: "darkgoldenrod",
    borderRadius: 50,
  },
  refresh: {},

  history: {},
});
