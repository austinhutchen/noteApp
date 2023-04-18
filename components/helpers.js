import axios from "axios";

 export default async function getQuote() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    await axios.get(url).then((res) => {
        let data = res.data.quotes;
        // rand quote from data
        let quoteNum = Math.floor(Math.random() * data.length);
        let randomQuote = data[quoteNum];
        return randomQuote;
      }).catch(function (error) {
        // handle error
        console.log(error);
        return undefined;
      });
  }



/*
    document.addEventListener("DOMContentLoaded", function () {
      const p = new User();
      let j = new Journal();
      if (check() === true) {
        const local = JSON.parse(localStorage.getItem("Journal"));
        document.getElementById("submit").addEventListener("click", (event) => {
          j.enterJournal(local, event);
          updateLocal(j);
        });
        document.getElementById("name").addEventListener("click", (event) => {
          p.getData(event);
        });
        document.getElementById("delete").addEventListener("click", () => {
          j.reset();
        });
        document.getElementById("display").addEventListener("click", () => {
          j.display();
        });
      } else {
        document.getElementById("entry").addEventListener("click", (event) => {
          j.enterJournal(undefined, event);
          updateLocal(j);
        });
        document.getElementById("name").addEventListener("click", (event) => {
          p.getData(event);
        });
      }
    });
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    document.writeln(today);
*/
