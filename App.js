import React, { Component } from 'react';
import { StyleSheet, Linking, Text, View, Button } from 'react-native';
import axios from 'axios';


class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         quote: '',
         author: ''
      }
   }

   componentDidMount() {
      this.getQuote()
   }

   getQuote() { 
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

      axios.get(url)
         .then(res => {
            let data = res.data.quotes
            let quoteNum = Math.floor(Math.random() * data.length)
            let randomQuote = data[quoteNum]

            this.setState({
               quote: randomQuote['quote'],
               author: randomQuote['author']
            })
         })
   }

   getNewQuote = () => { //will be called on clicking the New Quote button
      this.getQuote()
   }

   render() {
      const { quote, author } = this.state //Destructuring
      return (
         <View style={styles.container}>
            <Text style={{color: "white", padding: 60, fontSize: 30}}>Random Quotes</Text>

            <View className={styles.quotebox}>
               <View className={styles.quote} ><Text style={{color: "white", fontSize: 20}}>{quote}</Text></View>
               <View style={{marginTop: 20, marginBottom: 20}} ><Text style={{color: "black", fontSize:25}}>{author}</Text></View>

               <View style={{padding: 30, marginTop: "30%"}}>
                 <View style={{backgroundColor: 'black', width: '30%', marginBottom: 10}}>
             
                  </View>
                  <Button style={{backgroundColor: "black"}} title="New Quote" onPress={this.getNewQuote} />
                  <Button title="Tweet" style={{color: '#0ac6f0', padding: 20, fontSize: 16}}
                    onPress={() => Linking.openURL(`https://twitter.com/intent/tweet?text=${quote} ${author}`)}>

                  </Button>
               </View>
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'olive',
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
    marginVertical: 8
  },
  random: {
    padding: 150
  },
  title: {
    marginBottom:150,
  }
});

export default App;