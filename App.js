import React, { Component } from "react";
import { Text, TextInput, View, Button, TouchableOpacity } from "react-native";
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
    } else {
      old = check();
      this.j = old;
    }
    this.state = {
      quote: "",
      author: "",
      date: "",
      entry: "",
    };
  }

  setData(res, author, today, entry) {
    this.setState({
      quote: res,
      author: author,
      date: today,
      entry: entry,
    });
  }

  // same as on refresh
  componentDidMount = () => {
    td = Today();
    this.setData("", "", td);
    this.getNewQuote();
  };
  EntryUpdate = () => {
    // parse the textinput for text data on submit and set state  of entry
  };
  getNewQuote = async () => {
    let url = "https://api.quotable.io/random?maxLength=50";
    axios.get(url).then((res) => {
      const data = res.data.content;
      const author = res.data.author;
      console.log("ONE:" + data + " " + author + "\n");
      this.setData(data, author, td);
    });
  };

  onSubmitEdit = (_entry) => {
    this.j.add("test");
  };
  show = () => {
    this.j.display();
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
            ></TextInput>

            <Button
              style={styles.Text}
              title="Submit"
              onPress={() => {
                this.onSubmitEdit.bind(this);
              }}
            />
            <Button
              style={styles.history}
              title="History"
              onPress={() => {
                this.show.bind(this);
              }}
            />
            <Button
              style={styles.refresh}
              title="Refresh Quote"
              onPress={this.getNewQuote}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default App;
