import moment from "moment";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

export const updateLocal = async (j) => {
  try {
      let serial = JSON.stringify(j);
     AsyncStorage.setItem("Journal", serial);
  } catch (error) {
    console.log("ERROR in store attempt on local storage.")
    return 0;
  }
};
export const check = async () => {
  let check = await AsyncStorage.getItem("Journal");
  if (check!==undefined) {
    return check;
  } else {
    return false;
  }
};

export const Today = () => {
  var currentDate = moment().format("MM/DD/YYYY");
  return currentDate;
  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
};
