
import moment from 'moment'; 
import { AsyncStorage } from "@react-native-async-storage/async-storage";



export const updateLocal = async (j) => {
  let serial = JSON.stringify(j);
  try {
    await AsyncStorage.setItem("Journal", serial);
    return 1;
  } catch (error) {
    console.log(error);
    return 0;
  }

};
export const check = async () => {
  const check =await AsyncStorage.getItem("Journal");
  if (check !== null) {
    return true;
  }
};

export const Today=()=>{
  var currentDate =  moment().format("MM/DD/YYYY");
  return currentDate;
  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format

}