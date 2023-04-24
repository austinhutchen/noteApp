import React, { Component } from "react";
import { Text, TextInput, View, Button } from "react-native";
import axios from "axios";
import { styles } from "./components/styles";
import { Journal, User } from "./components/user";
import { updateLocal, check, Today } from "./components/helpers";
class App extends Component {
  constructor(props) {
    super(props);
    this.j = new Journal();
    this.u = new User();
    if (check() == false) {
      updateLocal(this.j);
    }
    this.state = {
      quote: "",
      author: "",
      date: "",
    };
  }

  setData(res, author, today) {
    this.setState({
      quote: res,
      author: author,
      date: today,
    });
  }

  // same as on refresh
  componentDidMount = () => {
    td = Today();
    this.setData("", "", td);
    this.getNewQuote();
  };

  getNewQuote = async () => {
    let url = "https://api.quotable.io/random";
    axios.get(url).then((res) => {
      const data = res.data.content;
      const author = res.data.author;
      console.log("ONE:" + data + " " + author + "\n");
      this.setData(data, author, td);
    });
  };

  render() {
    const { quote, author, date } = this.state; //Destructuring
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "khaki",
            paddingTop: 80,
            paddingBottom: 30,
            fontSize: 25,
            alignSelf: "center",
          }}
        >
          Quote of the day!
        </Text>

        <View className={styles.quotebox}>
          <Text style={styles.date}>{date}</Text>
          <View>
            <View style={{ alignSelf: "center", padding: 12 }}>
              <Text style={styles.quote}>{quote}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text style={styles.author}>- {author}</Text>

          <View style={{ padding: 30, marginTop: "30%" }}>
            <TextInput
              style={styles.Input}
              placeholder="How is your day going?"
              onSubmitEditing={() => {
                updateLocal(this.j);
              }}
            ></TextInput>
            <View
              style={{
                backgroundColor: "black",
                width: "30%",
                marginBottom: 10,
              }}
            ></View>

            <Button
              style={styles.refresh}
              title="Refresh Quote"
              onPress={this.getNewQuote}
            />
            <Button
              style={styles.history}
              title="History"
              onPress={() => {
                console.log("not done yet");
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default App;
