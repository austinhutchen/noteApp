import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#a2a8d3",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttontext: {
    fontSize: 16,
    lineHeight: '35%',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#347474',
  },

  author: {
    color: "white",
    fontSize: 25,
  },
  quote: {
    alignSelf: "center",
    color: "white",
    fontSize: '17em',
    fontStyle: "italic",
    padding: 20,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderWidth: 3,
    borderColor: "thistle",
    borderRadius:  30,
  },
  date: {
    color: "seashell",
    fontSize: 25,
    marginTop:'11%'
  },
  Input: {
    color: "white",
    height: '35%',
    margin: 12,
    paddingLeft: 20,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderWidth: 5,
    border: 2,
    borderColor: "khaki",
    borderRadius: 20,
  },
  refresh: {},
  history: {
    color: "green",
  },
  history: {},
  Text: {
    color: "#f95959",
  },
});
