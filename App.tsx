import React, { Component } from "react";
import { Text, TextInput, Pressable, View, Button } from "react-native";
import axios from "axios";
import { styles } from "./components/styles";
import { Journal, User } from "./components/user";
import { updateLocal, check, Today } from "./components/helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.j;
    this.u;
    this.state = {
      quote: "",
      author: "",
      date: "",
      entry: "",
      j: new Journal(),
      u: new User(),
    };
    if (!check() && updateLocal(this.j)) {
      console.log("LOCAL: Information saved locally.");
    } else {
      old = check();
      this.j = old;
    }
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
    let url = "https://api.quotable.io/random?maxLength=50";
    axios.get(url).then((res) => {
      const data = res.data.content;
      const author = res.data.author;
      console.log("ONE:" + data + " " + author + "\n");
      this.setData(data, author, td);
    });
  };

  onSubmitEdit = () => {
    this.state.j.add(this.state.entry);
    updateLocal(this.state.j);
  };

  show = () => {
    this.state.j.display();
  };

  render() {
    const { quote, author, date } = this.state; //Destructuring
    return (
      <View style={styles.container}>
        <View className={styles.quotebox}>
          <Text style={styles.date}>{date}</Text>
          <View>
            <View style={{ alignSelf: "center", padding: 12 }}>
              <Text style={styles.quote}>{quote}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: '10%', marginBottom: '8%' }}>
          <Text style={styles.author}>- {author}</Text>

          <View style={{ padding: 10, marginTop: "15%" }}>
            <TextInput
              style={styles.Input}
              placeholder="How is your day going? (click here)"
              placeholderTextColor={'#feffdf'}
              onChangeText={(text) => this.setState({ entry: text })}
            ></TextInput>
 <Pressable style={styles.button} onPress={() => { this.onSubmitEdit(); }}>
      <Text style={styles.buttontext}>Submit</Text>
    </Pressable>
                                 <Pressable style={styles.button}  onPress={() => {this.show(); }}>
      <Text style={styles.buttontext}>History</Text>
    </Pressable>
     <Pressable style={styles.button} onPress={this.getNewQuote}>
      <Text style={styles.buttontext}>Refresh Quote</Text>
    </Pressable>

                 </View>
        </View>
      </View>
    );
  }
}

/*
var PageOne = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 2,});
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'green'}]}>
       </View>
    )
  },
});

var PageTwo = React.createClass({
  _handlePress() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'purple'}]}>
       </View>
    )
  },
});

var SampleApp = React.createClass({
  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <PageOne navigator={navigator} />
    } else if (route.id === 2) {
      return <PageTwo navigator={navigator} />
    }
  },
*/
export default App;
